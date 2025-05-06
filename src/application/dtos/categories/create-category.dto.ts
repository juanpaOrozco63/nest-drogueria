import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Product } from 'src/domain/entities/product.entity';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'ID de la categoria',
    example: 1,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la categoria',
    example: 'Electrónica',
    type: String,
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Descripción de la categoria',
    example: 'Categoría para productos electrónicos',
    type: String,
  })
  @IsString()
  descripcion: string;

  @ApiProperty({
    description: 'Lista de productos asociados a la categoria',
    example: [
      { id: 1, name: 'Producto 1' },
      { id: 2, name: 'Producto 2' },
    ],
    type: [Product],
    required: false,
  })
  @IsOptional()
  products: Product[];
}
