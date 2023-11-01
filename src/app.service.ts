import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello My Nest Test Project!!!';
  }
  getTest(): string {
    return 'Hello this is test api.';
  }
}
