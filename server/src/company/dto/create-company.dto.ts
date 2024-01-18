import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsEmail,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  shortDescription: string;

  @IsNotEmpty()
  @IsString()
  fullDescription: string;

  @IsNotEmpty()
  @IsUrl()
  logoUrl: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  bulgariaFrom: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  worldFrom: number;

  @IsNotEmpty()
  @IsString()
  bulgariaLocation: string;

  @IsNotEmpty()
  @IsString()
  worldLocation: string;

  @IsNotEmpty()
  @IsInt()
  foundedIn: number;

  @IsNotEmpty()
  @IsInt()
  employeesCount: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  legalName: string;
}
