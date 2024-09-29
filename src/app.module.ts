import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [PrismaModule, TransactionsModule, CategoryModule],
})
export class AppModule {}
