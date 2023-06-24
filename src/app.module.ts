import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AccountingService } from './accounting/accounting.service';
import { AccountingModule } from './accounting/accounting.module';

@Module({
  imports: [DatabaseModule, AccountingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
