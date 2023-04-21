import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class TagPropertyDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

}
