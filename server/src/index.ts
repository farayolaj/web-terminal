import express from 'express';
import { createServer } from 'http';

import { createSocketServer } from './socket';

const app = express();

app.use(express.json());
app.use(express.static('public/'));

const server = createServer(app);
createSocketServer(server);

server.listen(5000, () => console.log('Server started on port 5000...'));