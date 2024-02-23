import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JwtGuard } from 'src/authz/jwt.guard';
import { JobsQueryParamsDto } from './dto/jobs-query-params.dto';

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @UseGuards(JwtGuard)
  @Post(['jobs', 'edu'])
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  @Get('jobs')
  findAllJobs(@Req() req: Request, @Query() queryParams: JobsQueryParamsDto) {
    return this.jobService.findAll({ ...queryParams, adType: 'job' });
  }

  @Get('edu')
  findAllEdu(@Req() req: Request, @Query() queryParams: JobsQueryParamsDto) {
    return this.jobService.findAll({ ...queryParams, adType: 'edu' });
  }

  @Get(['jobs/:id', 'edu/:id'])
  findOne(@Param('id') id: string) {
    return this.jobService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(['jobs/:id', 'edu/:id'])
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobService.update(id, updateJobDto);
  }

  @UseGuards(JwtGuard)
  @Delete(['jobs/:id', 'edu/:id'])
  remove(@Param('id') id: string) {
    return this.jobService.remove(id);
  }
}
