import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Productone, ProductoneDocument } from "./schemas/productone.schema";

@Injectable()
export class ProductoneRepository {
    constructor(@InjectModel(Productone.name) private ProductoneModule: Model<Productone>){}

    async findOne (productoneFilterQuery: FilterQuery<Productone>): Promise<Productone> {
        return this.ProductoneModule.findOne(productoneFilterQuery);
    }

    async find(productoneFilterQuery: FilterQuery<Productone>): Promise<Productone[]> {
        return this.ProductoneModule.find(productoneFilterQuery);
    }

    async create(productone: Productone): Promise<Productone> {
        const newproductone = new this.ProductoneModule(productone);
        return newproductone.save()
    }

    async findOneAndUpdate(productoneFilterQuery: FilterQuery<Productone>, productone: Partial<Productone>): Promise<Productone> {
        return this.ProductoneModule.findOneAndUpdate(productoneFilterQuery, productone)
    }
}