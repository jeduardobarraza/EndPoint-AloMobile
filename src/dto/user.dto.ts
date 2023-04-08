import {
    ArrayMinSize,
    IsArray,
    IsDateString,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsString,
    MinLength,
} from 'class-validator';

export class UserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    displayName: string;

    @IsString()
    email: string;

    @IsString()
    phoneNumber: string;

}
