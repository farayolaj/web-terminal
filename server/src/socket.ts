import { Server } from 'socket.io';
import http from 'http';
import { SocketWithTerm } from '../typings';
import { spawn } from 'node-pty';

function create(socket: SocketWithTerm) {
  socket.on('setup', async (data: { cols: number, rows: number }) => {
    const env = Object.assign({}, process.env) as Record<string, string>;
    env['COLORTERM'] = 'truecolor';
    const { rows, cols } = data;
    socket.term = spawn(process.platform === 'win32' ? 'cmd.exe' : 'zsh', [], {
      name: 'xterm-256color',
      cols: cols || 80,
      rows: rows || 24,
      cwd: process.platform === 'win32' ? undefined : env.PWD,
      env: env,
    });

    socket.term.onData(data => socket.send(data));
    socket.on('message', data => {
      // console.log(data);
      socket.term?.write(data);
    });
    socket.on('disconnect', (reason: string) => {
      console.log(`Terminal ${socket.id} closed`);
      console.log(`Reason: ${reason}`);
    });
    socket.on('resize', data => {
      socket.term?.resize(data.cols, data.rows);
    });
  });
}

export function createSocketServer(server: http.Server): void {
  const io = new Server(server);

  io.on('connection', (socket: SocketWithTerm) => {
    create(socket);
  });
}
