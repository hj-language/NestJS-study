import { IsString, MinLength, MaxLength, IsEmail, Matches, IsNotEmpty } from "class-validator";

export class CreateUserExtraDto {
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    name: string;
  
    @IsNotEmpty()
    @IsString()
    school: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
    password: string;
}