import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './schema/invoice.schema';
import { Model } from 'mongoose';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Customer } from './schema/customer.schema';
import { InvoiceItem } from './schema/invoice-item.schema';

@Injectable()
export class AccountingService {
    constructor(
        @InjectModel(Invoice.name) private readonly invoiceModel:Model<Invoice>,
        @InjectModel(InvoiceItem.name) private readonly invoiceItemModel:Model<InvoiceItem>,
        @InjectModel(Customer.name) private readonly customerModel:Model<Customer>
    ){}

    async createInvoice(createIvoiceDto:CreateInvoiceDto):Promise<Invoice>{
        const {customer_name,customer_phone,invoice_date,obj_items} = createIvoiceDto;
        const invoiceItems = await this.createInvoiceItems(obj_items);
        const customer = await this.createOrFindCustomer({name: customer_name, phone: customer_phone});
        return await this.invoiceModel.create({invoice_date,obj_items: invoiceItems,obj_customer: customer});
    }

    async getAllInvoices():Promise<Invoice[]>{
        return await this.invoiceModel.find().populate('obj_customer').populate('obj_items').exec()
    }

    //create customer
    private async createOrFindCustomer(customerData:{name:string,phone:string}):Promise<Customer>{
        const customer=await this.customerModel.findOne({phone: customerData.phone}).exec();
        if(customer){
            return customer;
        }
        return await this.customerModel.create(customerData);
    }

    //create invoice item
    private async createInvoiceItems(invoiceItemData:[{good_name:string,good_amount:number,good_price:number}]):Promise<InvoiceItem[]>{
        return await this.invoiceItemModel.create(invoiceItemData);
    }
}
