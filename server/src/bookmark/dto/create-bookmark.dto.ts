import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBookmarkDto {
  @IsNotEmpty()
  @IsUUID('4')
  jobId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
