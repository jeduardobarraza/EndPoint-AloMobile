import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({ timestamps: true })
export class Provider extends Document {
  @Prop({ required: true, unique: true, index: true })
  ProviderId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  nit: string;

  @Prop({ required: true })
  providerType: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  aloId: string;

}

export const ProvidertSchema = SchemaFactory.createForClass(Provider);
