import { Socket } from 'socket.io';
import { IPty } from 'node-pty';

export declare interface SocketWithTerm extends Socket {
    term?: IPty
}