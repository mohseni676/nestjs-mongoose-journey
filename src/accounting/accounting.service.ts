import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './schema/invoice.schema';
import { Model } from 'mongoose';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class AccountingService {
    constructor(
        @InjectModel(Invoice.name) private readonly invoiceModel:Model<Invoice>
    ){}

    async createInvoice(createIvoiceDto:CreateInvoiceDto):Promise<Invoice>{
        return await this.invoiceModel.create(createIvoiceDto);
    }

    async getAllInvoices():Promise<Invoice[]>{
        return await this.invoiceModel.find().exec()
    }
}
