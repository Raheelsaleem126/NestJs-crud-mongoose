import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateProducttwoDto } from "./dto/update-producttwo.dto";

import { Producttwo } from "./schemas/producttwo.schema";
import { ProductoneRepository } from "./productone.repository";

@Injectable()
export class ProductoneService {
    constructor(private readonly productoneRepository: ProductoneRepository) {}

    async getUserById(prodId: string): Promise<Producttwo> {
        return this.productoneRepository.findOne({ prodId })
    }

    async getUsers(): Promise<Producttwo[]> {
        return this.productoneRepository.find({});
    }

    async createUser(price: string, title: string, image: string): Promise<Producttwo> {
        return this.productoneRepository.create({
            prodId: uuidv4(),
            price,
            title,
            image
        })
    }

    async updateUser(prodId: string, userUpdates: UpdateProducttwoDto): Promise<Producttwo> {
        return this.productoneRepository.findOneAndUpdate({ prodId }, userUpdates);
    }
}