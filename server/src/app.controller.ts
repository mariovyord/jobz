import { All, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @All()
  getApi(): string {
    return 'Jobz API';
  }
}
