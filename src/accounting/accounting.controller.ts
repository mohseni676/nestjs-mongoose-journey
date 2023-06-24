import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Invoice } from './schema/invoice.schema';

@Controller('accounting')
export class AccountingController {
    constructor(
        private readonly accountingService:AccountingService
    ){}

    @Post('invoice')
    async createInvoice(@Body() createInvoiceDto:CreateInvoiceDto):Promise<Invoice>{
        return await this.accountingService.createInvoice(createInvoiceDto);
    }

    @Get("invoice/all")
    async getAllInvoices():Promise<Invoice[]>{
        return await this.accountingService.getAllInvoices()
    }
}
