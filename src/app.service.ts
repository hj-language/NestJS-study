import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { CreateUserExtraDto } from './dto/create.user.extra.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  testCreateUserDto(dto: CreateUserDto) {
    console.log(dto, typeof dto);
    return;
  }

  testCreateUserExtraDto(dto: CreateUserExtraDto) {
    console.log(dto, typeof dto);
    return;
  }
}
