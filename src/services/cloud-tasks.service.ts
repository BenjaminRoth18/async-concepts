import { Injectable } from '@nestjs/common';
import { CloudTasksClient, protos } from '@google-cloud/tasks';

export type TaskType = 'generalTask';
type TaskRequest = protos.google.cloud.tasks.v2.ITask;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';

interface CloudTaskBaseOptions {
  httpMethod: HttpMethod;
  url: string;
}

const cloudTaskQueueName = 'general-queue';
const location = 'us-central1';
const projectId = 'async-concepts';

const taskList: Record<TaskType, CloudTaskBaseOptions> = {
  generalTask: {
    httpMethod: 'POST',
    url: `${process.env.CLOUDRUN_URL}/handle-cloud-task`,
  },
};

@Injectable()
export class CloudTasksService {
  private readonly cloudTasksClient: CloudTasksClient;

  constructor() {
    this.cloudTasksClient = new CloudTasksClient();
  }

  async createTask(taskType: TaskType): Promise<{
    response: protos.google.cloud.tasks.v2.ITask & { name: string };
    request?: protos.google.cloud.tasks.v2.ICreateTaskRequest;
  }> {
    const taskConfig = taskList[taskType];

    const parent = this.cloudTasksClient.queuePath(
      projectId,
      location,
      cloudTaskQueueName,
    );

    const task: TaskRequest = {
      httpRequest: {
        headers: {
          'Content-Type': 'application/json',
        },
        httpMethod: taskConfig.httpMethod,
        url: taskConfig.url,
      },
    };

    const [response, request] = await this.cloudTasksClient.createTask({
      parent,
      task,
    });

    return { request, response: { ...response, name: response.name } };
  }
}
