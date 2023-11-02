import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello My Nest Test Project!!!  新增 Git Action 自动化部署测试.1234';
  }
  getTest(): string {
    return 'Hello this is test api.hhhhh';
  }
}
