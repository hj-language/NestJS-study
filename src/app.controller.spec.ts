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

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });

  describe('jest-study', () => {
    describe('outer', () => {
      console.log('outer-a');
    
      describe('inner 1', () => {
        console.log('inner 1');
        it.only('test 1', () => {
          console.log('test for inner 1');
          expect(true).toEqual(true);
        });
      });
    
      console.log('outer-b');
    
      it('test 1', () => {
        console.log('test for outer');
        expect(true).toEqual(true);
      });
    
      describe('inner 2', () => {
        console.log('inner 2');
        it('test for inner 2', () => {
          console.log('test for inner 2');
          expect(false).toEqual(false);
        });
      });
    
      console.log('outer-c');
    });
  })
});
