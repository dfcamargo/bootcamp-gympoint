import express from 'express';
import cors from 'cors';

import routes from './routes';

import './database';

class App {
  constructor() {
    // instância do serviço
    this.server = express();

    //  carrega os "middlewares" e as "routes"
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
