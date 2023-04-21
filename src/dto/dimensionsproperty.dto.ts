import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class DimensionsPropertyDto {

    @IsString()
    @IsNotEmpty()
    length: string;

    @IsString()
    @IsNotEmpty()
    width: string;

    @IsString()
    @IsNotEmpty()
    height: string;

}
