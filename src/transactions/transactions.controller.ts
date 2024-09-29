import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { TransactionsService } from './transactions.service'
import { CreateTransactionDto } from './dto/create-transaction.dto'

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.createTransaction(createTransactionDto)
  }

  @Get()
  findAll() {
    return this.transactionsService.getAllTransactions()
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.removeTransaction(+id)
  }
}
