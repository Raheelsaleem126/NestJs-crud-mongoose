import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
// import { UsersRepository } from "src/users/users.repository";
import { ProductoneController } from "./productone.controller";
import { Producttwo, ProducttwoSchema } from "./schemas/producttwo.schema";
import { ProductoneService } from "./productone.service";
import { ProductoneRepository } from "./productone.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: Producttwo.name, schema: ProducttwoSchema}])],
    controllers: [ProductoneController],
    providers: [ProductoneRepository, ProductoneService]
})

export class ProducttwoModule{}