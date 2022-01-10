import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Cart, CartDocument } from "./schemas/cart.schema";

@Injectable()
export class CartRepository {
    constructor(@InjectModel(Cart.name) private ProductoneModule: Model<Cart>){}

    async findOne (productoneFilterQuery: FilterQuery<Cart>): Promise<Cart> {
        return this.ProductoneModule.findOne(productoneFilterQuery);
    }

    async find(productoneFilterQuery: FilterQuery<Cart>): Promise<Cart[]> {
        return this.ProductoneModule.find(productoneFilterQuery);
    }

    async create(productone: Cart): Promise<Cart> {
        const newproductone = new this.ProductoneModule(productone);
        return newproductone.save()
    }

    async findOneAndUpdate(productoneFilterQuery: FilterQuery<Cart>, productone: Partial<Cart>): Promise<Cart> {
        return this.ProductoneModule.findOneAndUpdate(productoneFilterQuery, productone)
    }
}