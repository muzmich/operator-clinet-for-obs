// import { WebSocketServer } from "ws";

import { Server } from './server';
import { Socket } from './socket';

// export const ws = new WebSocketServer({ port: 9000 });

// export function startWSServer() {
//   console.log('Websocket started');

//   ws.on('connection', (connection, req) => {
//     console.log('Client connected!');
//   })
// }

export class App {
  constructor() { }

  public startServer(port?: number) {
    const server = new Server(port);
    server.start();
  }

  public startSocket(port?: number) {
    const socket = new Socket(port);
    socket.start();
  }
}
