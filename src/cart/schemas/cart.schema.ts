import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartDocument = Cart & Document;

@Schema()
export class Cart {

    @Prop()
    cartId: string;

    @Prop()
    productone: string;

    @Prop()
    producttwo: string;

    @Prop()
    productthree: string;

    @Prop()
    productfour: string;

    @Prop()
    request_user_name: string;

    @Prop()
    request_user_email: string;

    @Prop()
    age: number;

    @Prop()
    price: number;

}
export const CartSchema = SchemaFactory.createForClass(Cart)