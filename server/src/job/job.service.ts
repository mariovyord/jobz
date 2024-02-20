import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import {
  CustomQueryBuilder,
  IQueryParams,
} from 'src/shared/utils/query-builder';
import { camelToSnakeCase } from 'src/shared/utils/camel-to-snake-case';

@Injectable()
export class JobService {
  constructor(@InjectRepository(Job) private jobRepository: Repository<Job>) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const newJob = this.jobRepository.create(createJobDto);
    return await this.jobRepository.save(newJob);
  }

  async findAll(queryParams: Record<string, string>): Promise<Job[]> {
    const parsedQueryParams = this.parseQueryParams(queryParams);
    const builder = new CustomQueryBuilder<Job>(this.jobRepository);
    const jobs = await builder
      .whereIn(parsedQueryParams.whereIn)
      .whereEq(parsedQueryParams.whereEq)
      .innerJoinAndSelect('company')
      .orderBy('updated_at', 'DESC')
      .exec();

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

  private parseQueryParams(queryParams?: Record<string, string>): IQueryParams {
    if (!queryParams || Object.keys(queryParams).length === 0) {
      return {};
    }

    const result: IQueryParams = {};

    for (const [key, value] of Object.entries(queryParams)) {
      switch (key) {
        case 'orderBy':
          result.orderBy = value;
          break;
        default:
          const values = value.split(' ');

          if (values.length > 1) {
            if (!result['whereIn']) result['whereIn'] = {};
            result.whereIn[camelToSnakeCase(key)] = values;
          } else {
            if (!result['whereEq']) result['whereEq'] = {};
            result.whereEq[camelToSnakeCase(key)] = values;
          }

          break;
      }
    }

    return result;
  }
}
