import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

import { Cart } from './schemas/cart.schema';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':cartId')
  async getUser(@Param('cartId') cartId: string): Promise<Cart> {
    return this.cartService.getUserById(cartId);
  }

  @Get()
  async getUsers(): Promise<Cart[]> {
      return this.cartService.getUsers();
  }

  @Post()
  async createUser(@Body() createCartDto: CreateCartDto): Promise<Cart> {
      return this.cartService.createUser(createCartDto.productone, createCartDto.producttwo, createCartDto.productthree,createCartDto.productfour, createCartDto.request_user_name, createCartDto.request_user_email,createCartDto.price, createCartDto.age)
  }

  @Patch(':cartId')
  async updateUser(@Param('cartId') cartId: string, @Body() updateCartDto: UpdateCartDto): Promise<Cart> {
      return this.cartService.updateUser(cartId, updateCartDto);
  }
}
