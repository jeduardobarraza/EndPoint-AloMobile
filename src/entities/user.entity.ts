import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//import { SaleUnitLocationDto } from 'src/dto/saleUnitLocation.dto';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true, index: true })
  aloId: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  lastName: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  displayName: string;

  @Prop({ required: false })
  email: string;

  @Prop({ required: false })
  phoneNumber: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
