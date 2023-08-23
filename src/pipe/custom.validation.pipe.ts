import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { CreateUserExtraDto } from 'src/dto/create.user.extra.dto';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        console.log(value);
        console.log(metadata);
        if ('school' in value) {
            let specificDto: CreateUserExtraDto = value as CreateUserExtraDto;
            const e = await validate(specificDto);
            console.log(e);
            if (e.length > 0) throw new BadRequestException("extra dto error");
        } else {
            let specificDto: CreateUserDto = value as CreateUserDto;
            const e = await validate(specificDto);
            console.log(e);
            if (e.length > 0) throw new BadRequestException("default dto error");
        }
        return value;
    }
}