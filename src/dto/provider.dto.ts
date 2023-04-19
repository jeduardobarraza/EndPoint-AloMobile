import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class ProviderDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    nit: string;

    @IsString()
    @IsNotEmpty()
    providerType: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsNotEmpty()
    aloId: string;

}
