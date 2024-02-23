import { IsNotEmpty, IsUrl, IsString, IsArray, IsUUID } from 'class-validator';
import { Job } from '../entities/job.entity';
import {
  TEmploymentType,
  TField,
  TInterview,
  TLevel,
  TRemote,
} from '../types/job';

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
  adType: 'job' | 'edu';

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  field: TField;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  level: TLevel;

  @IsNotEmpty()
  @IsString()
  remote: TRemote;

  @IsNotEmpty()
  @IsString()
  employmentType: TEmploymentType;

  @IsNotEmpty()
  @IsString()
  interview: TInterview;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;
}
