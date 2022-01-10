import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProducttwoDto } from './dto/create-producttwo.dto';
import { UpdateProducttwoDto } from './dto/update-producttwo.dto';

import { Producttwo } from './schemas/producttwo.schema';
import { ProductoneService } from './productone.service';

@Controller('producttwo')
export class ProductoneController {
  constructor(private readonly productoneService: ProductoneService) {}

  @Get(':prodId')
  async getUser(@Param('prodId') prodId: string): Promise<Producttwo> {
    return this.productoneService.getUserById(prodId);
  }

  @Get()
  async getUsers(): Promise<Producttwo[]> {
      return this.productoneService.getUsers();
  }

  @Post()
  async createUser(@Body() createProducttwoDto: CreateProducttwoDto): Promise<Producttwo> {
      return this.productoneService.createUser(createProducttwoDto.price, createProducttwoDto.title, createProducttwoDto.image)
  }

  @Patch(':prodId')
  async updateUser(@Param('prodId') prodId: string, @Body() updateProducttwoDto: UpdateProducttwoDto): Promise<Producttwo> {
      return this.productoneService.updateUser(prodId, updateProducttwoDto);
  }
}
