import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobApplicationDto } from './dto/create-job-application.dto';
import { UpdateJobApplicationDto } from './dto/update-job-application.dto';
import { JobApplication } from './entities/job-application.entity';

@Injectable()
export class JobApplicationService {
  constructor(
    @InjectRepository(JobApplication)
    private jobApplicationRepository: Repository<JobApplication>,
  ) {}

  async create(
    createJobApplicationDto: CreateJobApplicationDto,
  ): Promise<JobApplication> {
    const newJobApplication = this.jobApplicationRepository.create(
      createJobApplicationDto,
    );
    return await this.jobApplicationRepository.save(newJobApplication);
  }

  async findAll(): Promise<JobApplication[]> {
    return await this.jobApplicationRepository.find();
  }

  async findOne(id: string): Promise<JobApplication> {
    const jobApplication = await this.jobApplicationRepository.findOneBy({
      id,
    });

    if (!jobApplication) {
      throw new NotFoundException(`JobApplication with ID ${id} not found`);
    }

    return jobApplication;
  }

  async update(
    id: string,
    updateJobApplicationDto: UpdateJobApplicationDto,
  ): Promise<JobApplication> {
    const existingJobApplication = await this.findOne(id);

    // Merge the existing job application with the updateJobApplicationDto
    const updatedJobApplication = this.jobApplicationRepository.merge(
      existingJobApplication,
      updateJobApplicationDto,
    );

    return await this.jobApplicationRepository.save(updatedJobApplication);
  }

  async remove(id: string): Promise<void> {
    const jobApplication = await this.findOne(id);
    await this.jobApplicationRepository.remove(jobApplication);
  }
}
