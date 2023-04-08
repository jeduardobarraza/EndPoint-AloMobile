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
import { UserDto } from 'src/dto/user.dto';
import { UserService } from 'src/services/user.service';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('ping')
  ping(): string {
    return this.userService.ping();
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  async create(@Body() request: UserDto): Promise<any> {
    return await this.userService.create(request);
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getUsers(@Query() query): Promise<any> {
    return await this.userService.getUsers(query?.type);
  }

  @Get('/:aloId')
  @HttpCode(HttpStatus.OK)
  async getUserById(@Param('aloId') aloId: string): Promise<any> {
    return await this.userService.getUserById(aloId);
  }

  @Put('/:aloId')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('aloId') aloId: string,
    @Body() request: UserDto,
  ): Promise<any> {
    return await this.userService.update(aloId, request);
  }

  @Delete('/:aloId')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('aloId') aloId: string): Promise<any> {
    return await this.userService.delete(aloId);
  }
}
