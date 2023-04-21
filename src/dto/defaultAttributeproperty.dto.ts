import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class defaultAttributePropertyDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    option: string;

}
