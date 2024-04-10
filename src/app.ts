import dotenv from "dotenv";

dotenv.config();

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { name } from "./consts/strings";
import configureSocketIO from "./socket";
import { clientUrl, port } from "./consts/env";

const app = express();

app.get("/", (req, res) => res.status(200).json({
  name: name,
  description: "backend service"
}));

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */
  cors: {
    origin: clientUrl
  }
});
configureSocketIO(io);


httpServer.listen(port);
console.info(`listening on http://localhost:${port}`);