import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASS,
      dbName: process.env.MONGODB_DBNAME,
      retryAttempts: 3,
    }),
  ],
})
export class CoreMongooseModule {}
