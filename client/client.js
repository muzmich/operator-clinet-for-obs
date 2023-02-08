

// ws.addEventListener('open', (event) => {
//   console.log('connected to WS');
// });


// window.onload = () => {
//   if (!document.getElementById('button')) return;
//   document.getElementById('button').addEventListener('click', () => ws.send('emotion'));
// }

// export { ws }

export class Socket {
  listeners = {};
  ws;

  onConnect(cb) {
    this.listeners['connect'] = cb;
  }

  onMessage(cb) {
    this.listeners['message'] = cb;
  }

  sendMessage(data) {
    this.ws.send(data);
  }

  connect() {
    this.ws = new WebSocket("ws://localhost:9000");

    this.ws.addEventListener('open', (ws) => {
      this.listeners['connect'] && this.listeners['connect'](ws);
      console.log('connected to WS');
    });

    this.ws.addEventListener('message', async (message) => {
      const data = await message.data.text();
      if (!this.listeners['message'] || typeof this.listeners['message'] !== 'function') {
        console.warn(`Received: "${data}"`);
        console.warn('But no handlers was provided');
        return;
      }
      this.listeners['message'](data);
    })
  }
}
