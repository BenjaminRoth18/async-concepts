import {
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getWelcome(): string {
    return `Welcome 😜`;
  }

  @Post('/handle-cloud-task')
  @HttpCode(HttpStatus.OK)
  postHandleCloudTask(
    @Headers('x-cloudtasks-taskname') cloudTaskName: string | undefined,
  ): void {
    const successString = `Successfully handled Cloud Task! ${cloudTaskName}`;
    Logger.log(successString);
  }
}
