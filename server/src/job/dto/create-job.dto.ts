import { IsNotEmpty, IsUrl, IsString, IsArray, IsUUID } from 'class-validator';
import { Job } from '../entities/job.entity';

export class CreateJobDto implements Partial<Job> {
  @IsNotEmpty()
  @IsUUID('4')
  companyId: string;

  @IsArray()
  @IsNotEmpty()
  @IsUUID('4', {
    each: true,
    message: 'Each element in filters must be a valid UUIDv4',
  })
  filtersIds: string[];

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  field: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  level: string;

  @IsNotEmpty()
  @IsString()
  remote: string;

  @IsNotEmpty()
  @IsString()
  employmentType: string;

  @IsNotEmpty()
  @IsString()
  interview: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;
}
