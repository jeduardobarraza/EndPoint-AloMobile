import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class ImagePropertyDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    dateCreated: string;

    @IsString()
    @IsNotEmpty()
    dateCreatedGmt: string;

    @IsString()
    @IsNotEmpty()
    dateModified: string;

    @IsString()
    @IsNotEmpty()
    dateModifiedGmt: string;

    @IsString()
    @IsNotEmpty()
    src: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    alt: string;
}
