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
}
