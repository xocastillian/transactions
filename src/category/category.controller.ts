import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto)
  }

  @Get()
  findAll() {
    return this.categoryService.getAllCategories()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.getCategoryById(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.deleteCategory(+id)
  }
}
