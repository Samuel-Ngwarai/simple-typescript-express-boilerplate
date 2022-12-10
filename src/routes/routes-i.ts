import { Express } from 'express';

import { SomeController } from '../controllers/some-controller';
export interface IRoute {
  register: (app: Express, someController: SomeController) => void;
}
