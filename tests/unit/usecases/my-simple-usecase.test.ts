import { MySimpleUsecase } from '../../../src/usecases/my-simple-usecase';

describe(__filename, () => {
  const simpleUsecasae = new MySimpleUsecase();
  describe('execute', () => {
    it('should pass', async () => {
      const res = await simpleUsecasae.execute();

      expect(res).toEqual(1);
    });
  });
});
