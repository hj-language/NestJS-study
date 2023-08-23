import { IsString, MinLength, MaxLength, IsEmail, Matches } from "class-validator";

export class CreateUserBase {
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    name: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
    password: string;
}