import { Module } from '@nestjs/common';
import { AccountingController } from './accounting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from './schema/invoice.schema';
import { AccountingService } from './accounting.service';

@Module({
  imports: [
    MongooseModule.forFeature([
    {name: Invoice.name, schema: InvoiceSchema}
  ])
],
  controllers: [AccountingController],
  providers: [AccountingService]
})
export class AccountingModule {}
