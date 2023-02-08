import WebSocket, { WebSocketServer } from "ws";
// import { v4 as uuidv4 } from 'uu';

export class Socket {
  private wss: WebSocket.Server<WebSocket.WebSocket>;
  private clients: Record<string, WebSocket> = {};

  constructor(private port = 9000) {
    this.init();
  }

  public start() {
    this.wss.on('connection', this.onConnect.bind(this));
    console.log(`Websocket listening on port ${this.port}`);
  }

  private onConnect(ws: WebSocket) {
    console.log(`Client connected`);

    ws.on('message', (data) => {
      console.log('received: %s', data);

      this.wss.clients.forEach(client => {
        if (client !== ws) client.send(data);
      })
    })
  }

  private init() {
    this.wss = new WebSocketServer({ port: this.port });
  }
}
