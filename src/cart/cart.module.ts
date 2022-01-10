import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartController } from "./cart.controller";
import { Cart, CartSchema } from "./schemas/cart.schema";
import { CartService } from "./cart.service";
import { CartRepository } from "./cart.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema}])],
    controllers: [CartController],
    providers: [CartRepository, CartService]
})

export class CartModule{}