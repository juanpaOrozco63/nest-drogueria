import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateBrandDto } from 'src/application/dtos/brands/create-brand.dto';
import { UpdateBrandDto } from 'src/application/dtos/brands/update-brand.dto';
import { BrandUseCase } from 'src/application/use-cases/brand.use-case';

@ApiTags('Marcas')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandUseCase: BrandUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva marca' })
  @ApiResponse({ status: 201, description: 'Marca creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandUseCase.create(createBrandDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las marcas' })
  @ApiResponse({ status: 200, description: 'Lista de marcas obtenida exitosamente.' })
  findAll() {
    return this.brandUseCase.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una marca por ID' })
  @ApiResponse({ status: 200, description: 'Marca obtenida exitosamente.' })
  @ApiResponse({ status: 404, description: 'Marca no encontrada.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  findOne(@Param('id') id: string) {
    return this.brandUseCase.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una marca por ID' })
  @ApiResponse({ status: 200, description: 'Marca actualizada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  @ApiResponse({ status: 404, description: 'Marca no encontrada.' })
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandUseCase.update(+id, updateBrandDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una marca por ID' })
  @ApiResponse({ status: 200, description: 'Marca eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Marca no encontrada.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  remove(@Param('id') id: string) {
    return this.brandUseCase.remove(+id);
  }
}
