import { IsNotEmpty, IsString, IsUUID, IsUrl } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsUUID(4)
  companyId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  imageUrl: string;
}
