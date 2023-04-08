import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//import { SaleUnitLocationDto } from 'src/dto/saleUnitLocation.dto';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true, unique: true, index: true })
  productId: string;

  @Prop({ required: true })
  name: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
