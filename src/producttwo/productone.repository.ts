import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Producttwo, ProducttwoDocument } from "./schemas/producttwo.schema";

@Injectable()
export class ProductoneRepository {
    constructor(@InjectModel(Producttwo.name) private ProductoneModule: Model<Producttwo>){}

    async findOne (productoneFilterQuery: FilterQuery<Producttwo>): Promise<Producttwo> {
        return this.ProductoneModule.findOne(productoneFilterQuery);
    }

    async find(productoneFilterQuery: FilterQuery<Producttwo>): Promise<Producttwo[]> {
        return this.ProductoneModule.find(productoneFilterQuery);
    }

    async create(productone: Producttwo): Promise<Producttwo> {
        const newproductone = new this.ProductoneModule(productone);
        return newproductone.save()
    }

    async findOneAndUpdate(productoneFilterQuery: FilterQuery<Producttwo>, productone: Partial<Producttwo>): Promise<Producttwo> {
        return this.ProductoneModule.findOneAndUpdate(productoneFilterQuery, productone)
    }
}