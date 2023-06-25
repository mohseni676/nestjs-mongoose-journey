import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Invoice } from "./invoice.schema";

export type CustomerDocument = HydratedDocument<Customer>

@Schema()
export class Customer{
    @Prop()
    name: string
    @Prop({unique: true})
    phone: string
    //Add one to many relation to InvoiceSchema
    @Prop({type:[
        {type : mongoose.Types.ObjectId , ref: 'Invoice'}
    ]})
    obj_invoices: [Invoice]
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);