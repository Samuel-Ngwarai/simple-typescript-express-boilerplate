process.env.NODE_CONFIG_DIR = require('path').resolve(__dirname, 'config');
import { Express } from 'express';

import { Server } from './server';
import { Routes } from './routes';
import { SomeController } from './controllers/some-controller';

import { logger } from './utils/logger';

export default class App {
  public expressServer: Express;
  private server: Server;

  public constructor(private readonly listen: boolean) {}

  public async init(): Promise<void> {
    this.server = new Server();

    const routes = new Routes();

    const vehicleGeolocationController = new SomeController();

    this.server.addExtensions();
    this.server.addSwaggerFile();
    this.server.addRoutes(routes, vehicleGeolocationController);
    this.server.addErrorHandler();

    this.expressServer = await this.server.init(this.listen);

    logger.info('App::init - Application started');
  }
}

if (require.main === module) {
  const app = new App(true);
  app.init();
}
