import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CategoryPropertyDto {

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
