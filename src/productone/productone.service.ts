import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateProductoneDto } from "./dto/update-productone.dto";

import { Productone } from "./schemas/productone.schema";
import { ProductoneRepository } from "./productone.repository";

@Injectable()
export class ProductoneService {
    constructor(private readonly productoneRepository: ProductoneRepository) {}

    async getUserById(prodId: string): Promise<Productone> {
        return this.productoneRepository.findOne({ prodId })
    }

    async getUsers(): Promise<Productone[]> {
        return this.productoneRepository.find({});
    }

    async createUser(price: string, title: string, image: string): Promise<Productone> {
        return this.productoneRepository.create({
            prodId: uuidv4(),
            price,
            title,
            image
        })
    }

    async updateUser(prodId: string, userUpdates: UpdateProductoneDto): Promise<Productone> {
        return this.productoneRepository.findOneAndUpdate({ prodId }, userUpdates);
    }
}