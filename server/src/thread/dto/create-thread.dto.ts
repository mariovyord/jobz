import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateThreadDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsUrl()
  image: string;

  @IsString()
  @IsNotEmpty()
  owner: string;
}
