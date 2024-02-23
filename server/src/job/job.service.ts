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

  async findAll(queryParams: JobsQueryParamsDto): Promise<Job[] | number> {
    const builder = this.jobRepository.createQueryBuilder('job');

    if (queryParams.companyId) {
      builder.andWhere('job.company_id = :companyId', {
        companyId: queryParams.companyId,
      });
    }

    if (queryParams.adType) {
      builder.andWhere('job.ad_type = :type', {
        type: queryParams.adType,
      });
    }

    if (queryParams.level) {
      builder.andWhere(`job.level IN (:...values)`, {
        values: queryParams.level,
      });
    }

    if (queryParams.field) {
      builder.andWhere(`job.field IN (:...values)`, {
        values: queryParams.field,
      });
    }

    if (queryParams.location) {
      builder.andWhere(`job.location LIKE :value`, {
        location: `%${queryParams.location}%`,
      });
    }

    if (queryParams.remote) {
      builder.andWhere(`job.remote IN (:...values)`, {
        values: queryParams.remote,
      });
    }

    if (queryParams.employmentType) {
      builder.andWhere(`job.employmentType IN (:...values)`, {
        values: queryParams.employmentType,
      });
    }

    if (queryParams.interview) {
      builder.andWhere(`job.interview IN (:...values)`, {
        values: queryParams.interview,
      });
    }

    if (queryParams.language) {
      builder.andWhere(`job.language @> ARRAY[:...values]']`, {
        values: queryParams.language,
      });
    }

    if (queryParams.techStack) {
      builder.andWhere(`job.tech_stack @> ARRAY[:...values]']`, {
        values: queryParams.techStack,
      });
    }

    if (queryParams.experience) {
      builder.andWhere(`job.experience = :value`, {
        value: queryParams.experience,
      });
    }

    if (queryParams.keyWord) {
      builder.andWhere(`job.description LIKE :value`, {
        keyWord: `%${queryParams.keyWord}%`,
      });
    }

    if (queryParams.published) {
      builder.andWhere(
        `updated_at >=
      CASE
          WHEN :value = 'today' THEN CURRENT_DATE
          WHEN :value = 'yesterday' THEN CURRENT_DATE - INTERVAL '1 day'
          WHEN :value = 'last-three-days' THEN CURRENT_DATE - INTERVAL '3 days'
          WHEN :value = 'last-seven-days' THEN CURRENT_DATE - INTERVAL '7 days'
          WHEN :value = 'last-fourteen-days' THEN CURRENT_DATE - INTERVAL '14 days'
          ELSE NULL
      END`,
        {
          value: queryParams.published,
        },
      );
    }

    // Pagination
    const defaultLimit = 20;
    builder.limit(queryParams.limit || defaultLimit);
    builder.offset(queryParams.offset || 0);

    // Return early if counting
    if (queryParams.count) {
      return await builder.getCount();
    }

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
