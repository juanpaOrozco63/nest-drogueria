import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { CreateProductDto } from 'src/application/dtos/products/create-product.dto';
import { UpdateProductDto } from 'src/application/dtos/products/update-product.dto';
import { PreciosPipe } from 'src/application/pipes/precios.pipe';
import { ProductUseCase } from 'src/application/use-cases/product.use-case';


@Controller('products')
export class ProductsController {
  constructor(private readonly productUseCase: ProductUseCase) {}

  @Post()
  @UsePipes(new PreciosPipe())
  create(@Body() createProductDto: CreateProductDto) {
    return this.productUseCase.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productUseCase.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productUseCase.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productUseCase.remove(+id);
  }
}
