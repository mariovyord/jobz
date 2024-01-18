import { IsNotEmpty, IsUrl, IsString, IsArray, IsUUID } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  @IsUUID('4')
  company: string;

  @IsArray()
  @IsNotEmpty()
  @IsUUID('4', {
    each: true,
    message: 'Each element in filters must be a valid UUIDv4',
  })
  filters: string[];

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  domain: string;

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
  type: string;

  @IsNotEmpty()
  @IsString()
  hours: string;

  @IsNotEmpty()
  @IsString()
  interview: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;
}
