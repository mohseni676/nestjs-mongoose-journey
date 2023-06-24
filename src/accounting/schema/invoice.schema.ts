import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Customer } from "./customer.schema";
import { InvoiceItem } from "./invoice-item.schema";

export type InvoiceDocument = HydratedDocument<Invoice>;

@Schema()
export class Invoice{
    @Prop({type: Date})
    invoice_date: Date
    /*
    @Prop() 
    customer_name: string
    @Prop()
    customer_phone: string 
    */
    // 👆 this transform to this 👇 (ManyToOne relation)
    @Prop({type: mongoose.Types.ObjectId, ref: 'Customer'})
    obj_customer: Customer

    /*
    @Prop(raw([
        {
            good_name: String,
            good_price: Number,
            good_amount: Number
        }
    ]))
    obj_items: Record<string,any>[]
    */
    // 👆 this transform to this 👇 (OneToMany relation)
    @Prop({type:[
        {type: mongoose.Types.ObjectId, ref: 'InvoiceItem'}
    ]})
    obj_items: [InvoiceItem]
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);