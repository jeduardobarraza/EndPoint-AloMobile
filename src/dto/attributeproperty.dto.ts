import {
    IsNotEmpty,
    IsString,
    IsArray,
    IsBoolean,
} from 'class-validator';

export class attributePropertyDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    position: string;

    @IsBoolean()
    @IsNotEmpty()
    visible: boolean;

    @IsBoolean()
    @IsNotEmpty()
    variation: boolean;

    @IsArray()
    @IsNotEmpty()
    options: string[];

}
