import { Request, Response, NextFunction } from 'express';

import { logger } from '../utils/logger';
import { MySimpleUsecase } from '../usecases/my-simple-usecase';

export class SomeController {
  private mySimpleUsecase = new MySimpleUsecase();
  private loggerPrefix = 'SomeController';

  constructor() {
  }

  public async doSomethingSimple(req: Request, res: Response, next: NextFunction): Promise<void> {
    logger.info(`${this.loggerPrefix}::doSomethingSimple`);
    try {
      const response = await this.mySimpleUsecase.execute();
      res.json(response);
    } catch (error) {
      logger.error(`${this.loggerPrefix}::doSomethingSimple, error occurred error: ${error}`);
      next(error);
    }
  }
}
