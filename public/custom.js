import { Socket } from './api/client.js';

const connection = new Socket();

connection.onConnect(() => {
  console.log('client connected');
})

connection.onMessage((message) => {
  console.log('Message received: ', message);
})

connection.connect();
