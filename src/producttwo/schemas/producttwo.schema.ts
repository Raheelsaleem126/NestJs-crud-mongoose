import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProducttwoDocument = Producttwo & Document;

@Schema()
export class Producttwo {

    @Prop()
    prodId: string;

    @Prop()
    price: string;

    @Prop()
    title: string;

    @Prop()
    image: string;

}
export const ProducttwoSchema = SchemaFactory.createForClass(Producttwo)