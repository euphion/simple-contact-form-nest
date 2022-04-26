import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateFormDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
