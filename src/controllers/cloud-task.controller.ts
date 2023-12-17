import { Controller, Post } from '@nestjs/common';
import { CloudTasksService, TaskType } from 'src/services/cloud-tasks.service';

@Controller('cloud-tasks')
export class CloudTasksController {
  constructor(private readonly cloudTasksService: CloudTasksService) {}

  @Post('/')
  async createCloudTask() {
    const generalTask: TaskType = 'generalTask';
    await this.cloudTasksService.createTask(generalTask);
  }
}
