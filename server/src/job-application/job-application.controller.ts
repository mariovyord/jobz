import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JobApplicationService } from './job-application.service';
import { CreateJobApplicationDto } from './dto/create-job-application.dto';
import { UpdateJobApplicationDto } from './dto/update-job-application.dto';
import { AuthGuard } from '@nestjs/passport';
import { SetUserIdInterceptor } from 'src/shared/interceptors/set-user-id.interceptor';

@Controller('job-applications')
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @UseInterceptors(SetUserIdInterceptor)
  create(@Body() createJobApplicationDto: CreateJobApplicationDto) {
    return this.jobApplicationService.create(createJobApplicationDto);
  }

  @Get()
  findAll() {
    return this.jobApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobApplicationService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobApplicationDto: UpdateJobApplicationDto,
  ) {
    return this.jobApplicationService.update(id, updateJobApplicationDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobApplicationService.remove(id);
  }
}
