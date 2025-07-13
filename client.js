const net = require("net");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = net.createConnection({
  host: '192.168.3.73',
  port: 3000
});

client.on('connect', () => {
  console.log('connected to server');

  rl.question('Enter your message: ', (message) => {
    client.write(message);
  });
});

client.on('data', (data) => {
  console.log('📥 Server says:', data.toString('utf-8'));

  rl.question('Enter your message: ', (message) => {
    client.write(message);
  });
});

client.on('end', () => {
  console.log('connection ended');
});

client.on('error', (err) => {
  console.log(err);
});
