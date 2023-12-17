import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    const expectedResponse = 'Welcome 😜';

    return request(app.getHttpServer())
      .get('/')
      .expect(HttpStatus.OK)
      .expect(expectedResponse);
  });

  it('/handle-cloud-task (POST)', () => {
    return request(app.getHttpServer())
      .post('/handle-cloud-task')
      .expect(HttpStatus.OK);
  });
});
