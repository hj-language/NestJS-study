import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
  async createUser(
    @Body()
    dto: CreateUserDto | CreateUserExtraDto
  ) {
    if ('school' in dto) {
      console.log("CreateUserExtraDto", dto); // dto 타입: CreateUserExtraDto
      let specificDto: CreateUserExtraDto = dto as CreateUserExtraDto;
      this.appService.testCreateUserExtraDto(specificDto);
    } else {
      console.log("CreateUserDto", dto); // dto 타입: CreateUserDto
      let specificDto: CreateUserDto = dto as CreateUserDto;
      this.appService.testCreateUserDto(specificDto);
    }
  }
}