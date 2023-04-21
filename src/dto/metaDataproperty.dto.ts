import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class metaDataPropertyDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    key: string;

    @IsString()
    @IsNotEmpty()
    value: string;

}
