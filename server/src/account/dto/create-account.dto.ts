import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  cvUrl: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
