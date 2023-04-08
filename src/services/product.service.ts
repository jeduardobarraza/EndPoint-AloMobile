import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { FilterQuery, Model, UpdateQuery } from 'mongoose';
  import { ProductDto } from 'src/dto/product.dto';
  import { Product } from 'src/entities/product.entity';
  import { TEXT_TO_VALIDATE_MONGO_DUPLICATES } from 'src/utils/constants';
  import { generalMessages, productMessages } from 'src/utils/friendlyMessage';

  import { util } from 'src/utils/util';

  @Injectable()
  export class ProductService {
    constructor(
      @InjectModel(Product.name)
      private productModel: Model<Product>,
    ) {}

    ping() {
      return '*********Product Service Works*************';
    }

    async create(product: ProductDto) {
      try {
        const productDocument = {
          ...product,
          productId: util.getShortId(),
        };
        return await new this.productModel(productDocument).save();
      } catch (error) {
        const hasDuplicateKeyText = (error.message || '')
          .toString()
          .includes(TEXT_TO_VALIDATE_MONGO_DUPLICATES);
        if (hasDuplicateKeyText)
          throw new ConflictException(productMessages.duplicate);
        throw new InternalServerErrorException(productMessages.saveError);
      }
    }

    async getProducts(type = '') {
      let filter: FilterQuery<Product>;
      if (type !== '') filter = { type };
      const products = await this.productModel
        .find(filter)
        .sort({ name: 1 })
        .catch((error) => {
          throw new InternalServerErrorException(
            generalMessages.findMongoDocuments,
            error.message,
          );
        })
        .then((data) => data);
      return products;
    }

    async getProductById(productId: string) {
      const filter: FilterQuery<Product> = { productId };
      const savedProduct = await this.productModel.findOne(filter).exec();
      if (!savedProduct) throw new NotFoundException(generalMessages.notFoundItem);
      return savedProduct;
    }

    async update(productId: string, product: ProductDto) {
      const savedProduct = await this.getProductById(productId);
      return this.productModel.findByIdAndUpdate(savedProduct._id, product, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      });
    }

    async delete(productId: string) {
      const savedProduct = await this.getProductById(productId);
      return this.productModel.findByIdAndRemove(savedProduct._id);
    }
  }
