import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe(
        '<i>Twitter Bot</i> for the <b>DevOps Community</b>.' +
          '<br/><br/>' +
          'Kindly checkout the repository at <i><b><a href="https://github.com/rohitg00/devops-twitter-bot">rohitg00/devops-twitter-bot</a></b></i>',
      );
    });
  });
});
