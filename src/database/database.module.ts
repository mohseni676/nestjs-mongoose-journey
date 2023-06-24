import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot("mongodb://root:example@127.0.0.1:27017/mongoose_journey?authSource=admin")
    ]
})
export class DatabaseModule {}
