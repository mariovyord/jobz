import { IsNotEmpty, IsUrl, IsString, IsArray, IsUUID } from 'class-validator';
import { Job } from '../entities/job.entity';
import {
  TField,
  TInterviewType,
  TLevel,
  TRemoteOptions,
  TEmploymentType,
} from 'src/shared/interfaces/job';

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
  jobField: TField;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  level: TLevel;

  @IsNotEmpty()
  @IsString()
  remoteOptions: TRemoteOptions;

  @IsNotEmpty()
  @IsString()
  employmentType: TEmploymentType;

  @IsNotEmpty()
  @IsString()
  interviewType: TInterviewType;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;
}
