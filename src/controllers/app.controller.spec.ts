import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { Logger } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    describe('/', () => {
      it('should return welcome string', () => {
        const expectedString = 'Welcome 😜';
        expect(appController.getWelcome()).toEqual(expectedString);
      });
    });

    describe('/handle-cloud-task', () => {
      it('should log success string', () => {
        jest.spyOn(Logger, 'log').mockImplementation();

        const cloudTaskName = 'test-task-name';

        appController.postHandleCloudTask(cloudTaskName);

        const expectedString = `Successfully handled Cloud Task! ${cloudTaskName}`;

        expect(Logger.log).toHaveBeenCalledWith(expectedString);
      });
    });
  });
});
