import { Express, Request, Response } from 'express';
import { SomeController } from '../controllers/some-controller';

import { IRoute } from './routes-i';

export class Routes implements IRoute {
  constructor() {}

  public register(app: Express, someController: SomeController): void {
    app.get('/', async (req: Request, res: Response) => {
      res.status(404).send('Uknown route called. Try "/simple" for example');
    });

    app.get('/readyz', async (req: Request, res: Response) => {
      res.json({ ready: true });
    });

    app.get('/healthz', async (req: Request, res: Response) => {
      res.json({ healthy: true });
    });

    /**
     * @swagger
     *
     * /simple:
     *   get:
     *     description: Do something simple
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Successfull Response
     */
    app.get('/simple',
      someController.doSomethingSimple.bind(someController));

    app.get('*',function (req: Request, res: Response) {
      res.status(404).send('Uknown route called. Try "/simple" for example');
    });
  }
}
