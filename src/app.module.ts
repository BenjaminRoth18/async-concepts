import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CloudTaskModule } from './cloud-task.module';

@Module({
  controllers: [AppController],
  imports: [CloudTaskModule],
})
export class AppModule {}
