import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class downloadsPropertyDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    file: string;

}
