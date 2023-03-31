import tmi from "tmi.js";

export class TwitchIntegration {
  client: tmi.Client;

  constructor() {
    this.client = new tmi.Client({
      options: { debug: true },
      identity: {
        username: '',
        password: ''
      },
      channels: ['']
    });
    this.client.connect().catch(console.error);

  }

  public sendMessage(msg: string) {
    this.client.say('#', msg);
  }
}
