import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create.user.dto';
import { CreateUserExtraDto } from './dto/create.user.extra.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() dto: CreateUserDto | CreateUserExtraDto) {
    if ('school' in dto) {
      console.log(dto); // dto 타입: CreateUserExtraDto
      let specificDto: CreateUserExtraDto = dto as CreateUserExtraDto;
      return specificDto;
    } else {
      console.log(dto); // dto 타입: CreateUserDto
      let specificDto: CreateUserDto = dto as CreateUserDto;
      return specificDto;
    }
  }
}