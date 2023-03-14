import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';
import { io } from 'socket.io-client';

const terminal = new Terminal({
  cursorBlink: true,
  cursorStyle: 'underline',
  tabStopWidth: 8
});

const socket = io({
  autoConnect: false
});

socket.on('message', (data: string | ArrayBuffer) => {
  terminal.write(typeof data === 'string' ? data : new Uint8Array(data));
});

terminal.onData(data => {
  socket.send(data);
});
terminal.onBinary(data => {
  const buffer = new Uint8Array(data.length);
  for (let i = 0; i < data.length; ++i) {
    buffer[i] = data.charCodeAt(i) & 255;
  }
  socket.send(buffer);
});

const fitAddon = new FitAddon();
const terminalShell = document.querySelector('#terminal') as HTMLElement;
terminal.loadAddon(fitAddon);
terminal.open(terminalShell);
terminal.onResize(data => socket.emit('resize', data));
fitAddon.fit();

let timeoutId: ReturnType<typeof setTimeout>;
new ResizeObserver(() => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => fitAddon.fit(), 500);
}).observe(terminalShell);

socket.connect();
socket.emit('setup', { cols: terminal.cols, rows: terminal.rows });
