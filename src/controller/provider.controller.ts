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
import { ProviderDto } from 'src/dto/provider.dto';
import { ProviderService } from 'src/services/provider.service';


@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Get('ping')
  ping(): string {
    return this.providerService.ping();
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  async create(@Body() request: ProviderDto): Promise<any> {
    return await this.providerService.create(request);
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getProviders(@Query() query): Promise<any> {
    return await this.providerService.getProviders(query?.type);
  }

  @Get('/:providerId')
  @HttpCode(HttpStatus.OK)
  async getProviderById(@Param('providerId') providerId: string): Promise<any> {
    return await this.providerService.getProviderById(providerId);
  }

  @Put('/:providerId')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('providerId') providerId: string,
    @Body() request: ProviderDto,
  ): Promise<any> {
    return await this.providerService.update(providerId, request);
  }

  @Delete('/:providerId')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('providerId') providerId: string): Promise<any> {
    return await this.providerService.delete(providerId);
  }
}
