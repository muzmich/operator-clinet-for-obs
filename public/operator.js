import { Socket } from './api/client.js';

const connection = new Socket();

connection.onConnect(() => {
  console.log('operator connected');
})

connection.connect();

document.getElementById('button1').addEventListener('click', () => {
  connection.sendMessage('button1 click')
})
