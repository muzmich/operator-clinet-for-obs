import express from "express";
import { TwitchIntegration } from './twitchIntegration';

export class Server {
  private app: ReturnType<typeof express>;
  constructor(private port = 3000) {
    this.init(port);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`)
    })
  }

  private init(port: number) {
    this.initCore()
    this.initStaticRoutes();
  }

  private initCore() {
    this.app = express();
  }

  private initStaticRoutes() {
    this.app.use('/', express.static('public'));
    this.app.use('/api', express.static('client'));
  }
}
