import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateBrandDto } from 'src/application/dtos/brands/create-brand.dto';
import { UpdateBrandDto } from 'src/application/dtos/brands/update-brand.dto';
import { BrandUseCase } from 'src/application/use-cases/brand.use-case';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandUseCase: BrandUseCase) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandUseCase.create(createBrandDto);
  }

  @Get()
  findAll() {
    return this.brandUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandUseCase.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandUseCase.update(+id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandUseCase.remove(+id);
  }
}
