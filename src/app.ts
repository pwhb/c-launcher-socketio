import express from 'express';
import { createServer } from 'node:http';
import { name } from './consts/strings';

const app = express();
const server = createServer(app);

app.get('/', (req, res) =>
{
  res.send(`<h1>${name}</h1>`);
});

server.listen(3000, () =>
{
  console.log('server running at http://localhost:3000');
});