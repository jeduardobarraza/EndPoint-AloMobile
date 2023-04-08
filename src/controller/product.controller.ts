import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { ProductService } from 'src/services/product.service';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('ping')
  ping(): string {
    return this.productService.ping();
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  async create(@Body() request: ProductDto): Promise<any> {
    return await this.productService.create(request);
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getProducts(@Query() query): Promise<any> {
    return await this.productService.getProducts(query?.type);
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.OK)
  async getProductById(@Param('productId') productId: string): Promise<any> {
    return await this.productService.getProductById(productId);
  }

  @Put('/:productId')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('productId') productId: string,
    @Body() request: ProductDto,
  ): Promise<any> {
    return await this.productService.update(productId, request);
  }

  @Delete('/:productId')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('productId') productId: string): Promise<any> {
    return await this.productService.delete(productId);
  }
}
