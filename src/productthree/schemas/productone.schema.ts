import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductoneDocument = Productone & Document;

@Schema()
export class Productone {

    @Prop()
    prodId: string;

    @Prop()
    price: string;

    @Prop()
    title: string;

    @Prop()
    image: string;

}
export const ProductoneSchema = SchemaFactory.createForClass(Productone)