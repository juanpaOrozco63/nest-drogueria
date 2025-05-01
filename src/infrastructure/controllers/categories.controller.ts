import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/application/dtos/categories/create-category.dto';
import { UpdateCategoryDto } from 'src/application/dtos/categories/update-category.dto';
import { CategoriesUseCase } from 'src/application/use-cases/categories.use-case';

@ApiTags('Categorías')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesUseCase: CategoriesUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva categoría' })
  @ApiResponse({ status: 201, description: 'La categoría ha sido creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesUseCase.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las categorías' })
  @ApiResponse({ status: 200, description: 'Lista de categorías obtenida exitosamente.' })
  findAll() {
    return this.categoriesUseCase.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una categoría por ID' })
  @ApiResponse({ status: 200, description: 'Categoría obtenida exitosamente.' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  findOne(@Param('id') id: string) {
    return this.categoriesUseCase.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una categoría por ID' })
  @ApiResponse({ status: 200, description: 'Categoría actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesUseCase.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una categoría por ID' })
  @ApiResponse({ status: 200, description: 'Categoría eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  remove(@Param('id') id: string) {
    return this.categoriesUseCase.remove(+id);
  }
}
