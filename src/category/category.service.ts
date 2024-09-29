import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: Prisma.CategoryCreateInput) {
    return this.prisma.category.create({
      data,
    })
  }

  async getAllCategories() {
    return this.prisma.category.findMany()
  }

  async getCategoryById(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
    })
  }

  async deleteCategory(id: number) {
    return this.prisma.category.delete({
      where: { id },
    })
  }
}
