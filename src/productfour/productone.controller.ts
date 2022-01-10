import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductoneDto } from './dto/create-productone.dto';
import { UpdateProductoneDto } from './dto/update-productone.dto';

import { Productone } from './schemas/productone.schema';
import { ProductoneService } from './productone.service';

@Controller('productone')
export class ProductoneController {
  constructor(private readonly productoneService: ProductoneService) {}

  @Get(':prodId')
  async getUser(@Param('prodId') userId: string): Promise<Productone> {
    return this.productoneService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<Productone[]> {
      return this.productoneService.getUsers();
  }

  @Post()
  async createUser(@Body() createProductoneDto: CreateProductoneDto): Promise<Productone> {
      return this.productoneService.createUser(createProductoneDto.price, createProductoneDto.title, createProductoneDto.image)
  }

  @Patch(':prodId')
  async updateUser(@Param('prodId') prodId: string, @Body() updateProductoneDto: UpdateProductoneDto): Promise<Productone> {
      return this.productoneService.updateUser(prodId, updateProductoneDto);
  }
}
