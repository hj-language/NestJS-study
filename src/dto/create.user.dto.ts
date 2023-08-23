import { IsEmail, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    id: number;
  
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    name: string;
  
    @IsNumber()
    age: number;
  
    @IsEmail()
    email: string;
  
    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
    password: string;
}