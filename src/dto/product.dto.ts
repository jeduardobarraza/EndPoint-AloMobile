import {
    IsArray,
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsString,
} from 'class-validator';
import { downloadsPropertyDto } from './downloadsproperty.dto';
import { DimensionsPropertyDto } from './dimensionsproperty.dto';
import { CategoryPropertyDto } from './categoryproperty.dto';
import { ImagePropertyDto } from './imageproperty.dto';
import { TagPropertyDto } from './tagproperty.dto';
import { defaultAttributePropertyDto } from './defaultAttributeproperty.dto';
import { attributePropertyDto } from './attributeproperty.dto';
import { metaDataPropertyDto } from './metaDataproperty.dto';

export class ProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @IsNotEmpty()
    permaLink: string;

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
    type: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsBoolean()
    @IsNotEmpty()
    featured: boolean;

    @IsString()
    @IsNotEmpty()
    catalogVisibility: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    shortDescription: string;

    @IsString()
    @IsNotEmpty()
    sku: string;

    @IsString()
    @IsNotEmpty()
    price: string;

    @IsString()
    @IsNotEmpty()
    regularPrice: string;

    @IsString()
    @IsNotEmpty()
    salePrice: string;

    @IsString()
    @IsNotEmpty()
    dateOnSaleFrom: string;

    @IsString()
    @IsNotEmpty()
    dateOnSaleFromGmt: string;

    @IsString()
    @IsNotEmpty()
    dateOnSaleTo: string;

    @IsString()
    @IsNotEmpty()
    dateOnSaleToGmt: string;

    @IsString()
    @IsNotEmpty()
    priceHtml: string;

    @IsBoolean()
    @IsNotEmpty()
    onSale: boolean;

    @IsBoolean()
    @IsNotEmpty()
    purchasable: boolean;

    @IsNumber()
    @IsNotEmpty()
    totalSales: number;

    @IsBoolean()
    @IsNotEmpty()
    virtual: boolean;

    @IsBoolean()
    @IsNotEmpty()
    downloadable: boolean;

    @IsArray()
    @IsNotEmpty()
    downloads: downloadsPropertyDto[];

    @IsNumber()
    @IsNotEmpty()
    downloadLimit: number;

    @IsNumber()
    @IsNotEmpty()
    downloadExpiry: number;

    @IsString()
    @IsNotEmpty()
    externalUrl: string;

    @IsString()
    @IsNotEmpty()
    buttonText: string;

    @IsString()
    @IsNotEmpty()
    taxStatus: string;

    @IsString()
    @IsNotEmpty()
    taxClass: string;

    @IsBoolean()
    @IsNotEmpty()
    manageStock: boolean;

    @IsNumber()
    @IsNotEmpty()
    stockQuantity: number;

    @IsString()
    @IsNotEmpty()
    stockStatus: string;

    @IsString()
    @IsNotEmpty()
    backorders: string;

    @IsBoolean()
    @IsNotEmpty()
    backordersAllowed: boolean;

    @IsBoolean()
    @IsNotEmpty()
    backordered: boolean;

    @IsBoolean()
    @IsNotEmpty()
    soldIndividually: boolean;

    @IsString()
    @IsNotEmpty()
    weight: string;

    @IsObject()
    @IsNotEmpty()
    dimensions: DimensionsPropertyDto;

    @IsBoolean()
    @IsNotEmpty()
    shippingRequired: boolean;

    @IsBoolean()
    @IsNotEmpty()
    shippingTaxable: boolean;

    @IsString()
    @IsNotEmpty()
    shippingClass: string;

    @IsNumber()
    @IsNotEmpty()
    shippingClassId: number;

    @IsBoolean()
    @IsNotEmpty()
    reviewsAllowed: boolean;

    @IsString()
    @IsNotEmpty()
    averageRating: string;

    @IsNumber()
    @IsNotEmpty()
    ratingCount: number;

    @IsArray()
    @IsNotEmpty()
    relatedIds: string[];

    @IsArray()
    @IsNotEmpty()
    upsellIds: string[];

    @IsArray()
    @IsNotEmpty()
    crossSellIds: string[];

    @IsNumber()
    @IsNotEmpty()
    parentId: number;

    @IsString()
    @IsNotEmpty()
    purchaseNote: string;

    @IsArray()
    @IsNotEmpty()
    categories: CategoryPropertyDto[];

    @IsArray()
    @IsNotEmpty()
    tags: TagPropertyDto[];

    @IsArray()
    @IsNotEmpty()
    images: ImagePropertyDto[];

    @IsArray()
    @IsNotEmpty()
    attributes: attributePropertyDto[];

    @IsArray()
    @IsNotEmpty()
    defaultAttributes: defaultAttributePropertyDto[];

    @IsArray()
    @IsNotEmpty()
    variations: string[];

    @IsArray()
    @IsNotEmpty()
    groupedProducts: string[];

    @IsNumber()
    @IsNotEmpty()
    menuOrder: number;

    @IsArray()
    @IsNotEmpty()
    metaData: metaDataPropertyDto[];

}
