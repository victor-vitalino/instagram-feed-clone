import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import socket from 'socket.io';
import http from 'http';
import routes from './routes';

// conexao databases
import './database';

class App {
  constructor() {
    this.server = express(); // server express

    this.httpServer = http.Server(this.server); // server http padrao node
    this.io = socket(this.httpServer); // socket recebendo server do node

    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'uploads', 'resized'))
    );
    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.server.use((req, res, next) => {
      req.io = this.io;
      next();
    });
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().httpServer;
