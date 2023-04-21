import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { attributePropertyDto } from 'src/dto/attributeproperty.dto';
import { CategoryPropertyDto } from 'src/dto/categoryproperty.dto';
import { defaultAttributePropertyDto } from 'src/dto/defaultAttributeproperty.dto';
import { downloadsPropertyDto } from 'src/dto/downloadsproperty.dto';
import { ImagePropertyDto } from 'src/dto/imageproperty.dto';
import { metaDataPropertyDto } from 'src/dto/metaDataproperty.dto';
import { DimensionsPropertyDto } from 'src/dto/dimensionsproperty.dto';
import { TagPropertyDto } from 'src/dto/tagproperty.dto';

//import { SaleUnitLocationDto } from 'src/dto/saleUnitLocation.dto';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true, unique: true, index: true })
  productId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  permaLink: string;

  @Prop({ required: true })
  dateCreated: string;

  @Prop({ required: true })
  dateCreatedGmt: string;

  @Prop({ required: true })
  dateModified: string;

  @Prop({ required: true })
  dateModifiedGmt: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  featured: boolean;

  @Prop({ required: true })
  catalogVisibility: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  sku: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  regularPrice: string;

  @Prop({ required: true })
  salePrice: string;

  @Prop({ required: true })
  dateOnSaleFrom: string;

  @Prop({ required: true })
  dateOnSaleFromGmt: string;

  @Prop({ required: true })
  dateOnSaleTo: string;

  @Prop({ required: true })
  dateOnSaleToGmt: string;

  @Prop({ required: true })
  priceHtml: string;

  @Prop({ required: true })
  onSale: boolean;

  @Prop({ required: true })
  purchasable: boolean;

  @Prop({ required: true })
  totalSales: number;

  @Prop({ required: true })
  virtual: boolean;

  @Prop({ required: true })
  downloadable: boolean;

  @Prop({ required: true })
  downloads: downloadsPropertyDto[];

  @Prop({ required: true })
  downloadLimit: number;

  @Prop({ required: true })
  downloadExpiry: number;

  @Prop({ required: true })
  externalUrl: string;

  @Prop({ required: true })
  buttonText: string;

  @Prop({ required: true })
  taxStatus: string;

  @Prop({ required: true })
  taxClass: string;

  @Prop({ required: true })
  manageStock: boolean;

  @Prop({ required: true })
  stockQuantity: number;

  @Prop({ required: true })
  stockStatus: string;

  @Prop({ required: true })
  backorders: string;

  @Prop({ required: true })
  backordersAllowed: boolean;

  @Prop({ required: true })
  backordered: boolean;

  @Prop({ required: true })
  soldIndividually: boolean;

  @Prop({ required: true })
  weight: string;

  @Prop({ required: true })
  dimensions: DimensionsPropertyDto;

  @Prop({ required: true })
  shippingRequired: boolean;

  @Prop({ required: true })
  shippingTaxable: boolean;

  @Prop({ required: true })
  shippingClass: string;

  @Prop({ required: true })
  shippingClassId: number;

  @Prop({ required: true })
  reviewsAllowed: boolean;

  @Prop({ required: true })
  averageRating: string;

  @Prop({ required: true })
  ratingCount: number;

  @Prop({ required: true })
  relatedIds: string[];

  @Prop({ required: true })
  upsellIds: string[];

  @Prop({ required: true })
  crossSellIds: string[];

  @Prop({ required: true })
  parentId: number;

  @Prop({ required: true })
  purchaseNote: string;

  @Prop({ required: true })
  categories: CategoryPropertyDto[];

  @Prop({ required: true })
  tags: TagPropertyDto[];

  @Prop({ required: true })
  images: ImagePropertyDto[];

  @Prop({ required: true })
  attributes: attributePropertyDto[];

  @Prop({ required: true })
  defaultAttributes: defaultAttributePropertyDto[];

  @Prop({ required: true })
  variations: string[];

  @Prop({ required: true })
  groupedProducts: string[];

  @Prop({ required: true })
  menuOrder: number;

  @Prop({ required: true })
  metaData: metaDataPropertyDto[];


}

export const ProductSchema = SchemaFactory.createForClass(Product);
