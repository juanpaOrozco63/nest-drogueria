import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, Query, Inject } from '@nestjs/common';
import { CreateProductDto } from 'src/application/dtos/products/create-product.dto';
import { UpdateProductDto } from 'src/application/dtos/products/update-product.dto';
import { PreciosPipe } from 'src/application/pipes/precios.pipe';
import { ProductUseCase } from 'src/application/use-cases/product.use-case';
import { KafkaProducerService } from '../kafka/kafka.producer';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productUseCase: ProductUseCase,
    private readonly kafkaProducer: KafkaProducerService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiResponse({ status: 201, description: 'El producto ha sido creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  @UsePipes(new PreciosPipe())
  create(@Body() createProductDto: CreateProductDto) {
    return this.productUseCase.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos' })
  @ApiResponse({ status: 200, description: 'Lista de productos obtenida exitosamente.' })
  findAll() {
    return this.productUseCase.findAll();
  }

  @Get('/search')
  @ApiOperation({ summary: 'Obtener un producto por nombre' })
  @ApiResponse({ status: 200, description: 'Producto encontrado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  findByName(@Query('name') name: string) {
    return this.productUseCase.findByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto por ID' })
  @ApiResponse({ status: 200, description: 'Producto encontrado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  findOne(@Param('id') id: string) {
    return this.productUseCase.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un producto por ID' })
  @ApiResponse({ status: 200, description: 'Producto actualizado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productUseCase.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto por ID' })
  @ApiResponse({ status: 200, description: 'Producto eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  remove(@Param('id') id: string) {
    return this.productUseCase.remove(+id);
  }

  @Post('send-message')
  @ApiOperation({ summary: 'Enviar un mensaje a Kafka' })
  @ApiResponse({ status: 201, description: 'Mensaje enviado a Kafka exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async sendMessage(@Body() body: any) {
    await this.kafkaProducer.sendMessage('mi-topic', {
      mensaje: body.message,
    });
    return { message: 'Mensaje enviado a Kafka' };
  }
}
