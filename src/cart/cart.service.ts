import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateCartDto } from "./dto/update-cart.dto";

import { Cart } from "./schemas/cart.schema";
import { CartRepository } from "./cart.repository";

@Injectable()
export class CartService {
    constructor(private readonly cartRepository: CartRepository) {}

    async getUserById(cartId: string): Promise<Cart> {
        return this.cartRepository.findOne({ cartId })
    }

    async getUsers(): Promise<Cart[]> {
        return this.cartRepository.find({});
    }

    async createUser(productone: string, producttwo: string, productthree: string,productfour: string, request_user_name: string, request_user_email: string, price: number, age: number): Promise<Cart> {
        return this.cartRepository.create({
            cartId: uuidv4(),
            productone,
            producttwo,
            productthree,
            productfour,
            request_user_name,
            request_user_email,
            price,
            age

        })
    }

    async updateUser(cartId: string, cartUpdates: UpdateCartDto): Promise<Cart> {
        return this.cartRepository.findOneAndUpdate({ cartId }, cartUpdates);
    }
}