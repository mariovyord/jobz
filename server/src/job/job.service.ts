import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { IQuery, buildQuery } from 'src/shared/utils/query-builder';

@Injectable()
export class JobService {
  constructor(@InjectRepository(Job) private jobRepository: Repository<Job>) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const newJob = this.jobRepository.create(createJobDto);
    return await this.jobRepository.save(newJob);
  }

  async findAll(filters: IQuery): Promise<Job[]> {
    const query = buildQuery(this.jobRepository, filters);
    query.innerJoinAndSelect('entity.company', 'company');

    const jobs = await query.getMany();

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
