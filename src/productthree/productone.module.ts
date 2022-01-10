import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
// import { UsersRepository } from "src/users/users.repository";
import { ProductoneController } from "./productone.controller";
import { Productone, ProductoneSchema } from "./schemas/productone.schema";
import { ProductoneService } from "./productone.service";
import { ProductoneRepository } from "./productone.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: Productone.name, schema: ProductoneSchema}])],
    controllers: [ProductoneController],
    providers: [ProductoneRepository, ProductoneService]
})

export class ProductoneModule{}