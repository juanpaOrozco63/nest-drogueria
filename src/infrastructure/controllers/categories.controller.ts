import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCategoryDto } from 'src/application/dtos/categories/create-category.dto';
import { UpdateCategoryDto } from 'src/application/dtos/categories/update-category.dto';
import { CategoriesUseCase } from 'src/application/use-cases/categories.use-case';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesUseCase: CategoriesUseCase) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesUseCase.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesUseCase.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesUseCase.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesUseCase.remove(+id);
  }
}
