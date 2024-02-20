import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { JobsQueryParamsDto } from './dto/jobs-query-params.dto';

@Injectable()
export class JobService {
  constructor(@InjectRepository(Job) private jobRepository: Repository<Job>) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const newJob = this.jobRepository.create(createJobDto);
    return await this.jobRepository.save(newJob);
  }

  async findAll(queryParams: JobsQueryParamsDto): Promise<Job[]> {
    const builder = this.jobRepository.createQueryBuilder('job');

    if (queryParams.companyId) {
      builder.andWhere('job.company_id = :companyId', {
        companyId: queryParams.companyId,
      });
    }

    if (queryParams.level) {
      builder.andWhere(`job.level IN (:...values)`, {
        values: queryParams.level,
      });
    }

    // Pagination
    const defaultLimit = 20;
    builder.limit(queryParams.limit || defaultLimit);
    builder.offset(queryParams.offset || 0);

    // Mandatory operations
    builder.innerJoinAndSelect(`job.company`, 'company');
    builder.orderBy('job.updated_at', 'DESC');

    const jobs = await builder.getMany();

    if (!jobs) {
      return [];
    }

    return jobs;
  }

  async findOne(id: string): Promise<Job> {
    const job = await this.jobRepository.findOne({
      where: { id },
      relations: { company: true },
    });

    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }

    return job;
  }

  async update(id: string, updateJobDto: UpdateJobDto): Promise<Job> {
    const existingJob = await this.findOne(id);

    // Merge the existing job with the updateJobDto
    const updatedJob = this.jobRepository.merge(existingJob, updateJobDto);

    return await this.jobRepository.save(updatedJob);
  }

  async remove(id: string): Promise<void> {
    const job = await this.findOne(id);
    await this.jobRepository.remove(job);
  }
}
