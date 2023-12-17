import { Module } from '@nestjs/common';
import { CloudTasksService } from './services/cloud-tasks.service';
import { CloudTasksController } from './controllers/cloud-task.controller';

@Module({
  controllers: [CloudTasksController],
  providers: [CloudTasksService],
  exports: [CloudTasksService],
})
export class CloudTaskModule {}
