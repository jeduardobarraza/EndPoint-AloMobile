import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import dbConfig from './modules/db-config'

import { User, UserSchema } from './entities/user.entity'
import { Product, ProductSchema } from './entities/product.entity';
import { Provider, ProviderSchema } from './entities/provider.entity';
import { ProductController } from './controller/product.controller';
import { UserController } from './controller/user.controller';
import { ProviderController } from './controller/provider.controller';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { ProviderService } from './services/provider.service';
import { PersistenceModule } from './modules/persistence.module';

@Module({
  imports: [
  ConfigModule.forRoot({
    envFilePath: './.env',
    load: [dbConfig],
    isGlobal: true,
  }),
  MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Product.name, schema: ProductSchema },
    { name: Provider.name, schema: ProviderSchema },
  ]),
  PersistenceModule,
],
  controllers: [
    AppController,
    UserController,
    ProductController,
    ProviderController,
  ],
  providers: [
    AppService,
    UserService,
    ProductService,
    ProviderService,
  ],
})
export class AppModule {}
