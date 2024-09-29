import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async createTransaction(data: Prisma.TransactionCreateInput) {
    return this.prisma.transaction.create({
      data,
      include: {
        category: true,
      },
    })
  }

  async getAllTransactions() {
    return this.prisma.transaction.findMany({
      include: {
        category: true,
      },
    })
  }

  async removeTransaction(id: number) {
    return this.prisma.transaction.delete({
      where: { id },
    })
  }
}
