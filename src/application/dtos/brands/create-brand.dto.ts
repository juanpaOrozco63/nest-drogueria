import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Product } from 'src/domain/entities/product.entity';

export class CreateBrandDto {
  @ApiProperty({
    description: 'ID de la marca',
    example: 1,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la marca',
    example: 'Marca Ejemplo',
    type: String,
  })
  @IsString()
  nombre: string;

  @ApiPropertyOptional({
    description: 'Lista de productos asociados a la marca',
    type: [Product],
  })
  @IsOptional()
  products: Product[];
}
