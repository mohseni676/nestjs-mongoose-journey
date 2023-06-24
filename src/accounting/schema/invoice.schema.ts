import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type InvoiceDocument = HydratedDocument<Invoice>;

@Schema()
export class Invoice{
    @Prop({type: Date})
    invoice_date: Date
    @Prop()
    customer_name: string
    @Prop()
    customer_phone: string
    @Prop(raw([
        {
            good_name: String,
            good_price: Number,
            good_amount: Number
        }
    ]))
    obj_items: Record<string,any>[]
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);