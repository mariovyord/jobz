import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt, Min, IsArray } from 'class-validator';

export class JobsQueryParamsDto {
  @IsOptional()
  @IsString()
  companyId?: string;

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  level?: string[];

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  field?: string[];

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  remote?: string[];

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  employmentType?: string[];

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  interview?: string[];

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  experience?: string[];

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  techStack?: string[];

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  language?: string[];

  @IsOptional()
  @IsString()
  keyWord?: string;

  @IsOptional()
  @Transform(({ value }) => value.split(' '), { toClassOnly: true })
  @IsArray()
  published?: string;

  @IsOptional()
  @IsString()
  orderBy?: string;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  limit?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(0)
  offset?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  count?: 1;
}
