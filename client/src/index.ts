import { Terminal } from 'xterm';
// import LocalEchoController from 'local-echo';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';

const terminal = new Terminal({
  cursorBlink: true,
  cursorStyle: 'underline',
  tabStopWidth: 8
});

const fitAddon = new FitAddon();

terminal.loadAddon(fitAddon);
terminal.open(document.querySelector('#terminal') as HTMLElement);
fitAddon.fit();

terminal.write('Allo, welcome to LearNode');
