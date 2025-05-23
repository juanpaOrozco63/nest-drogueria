import { IsString, IsNumber, IsPositive, ValidateNested, IsEnum, MinLength, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCategoryDto } from '../categories/create-category.dto';
import { CreateBrandDto } from '../brands/create-brand.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'ID del producto', type: Number, example: 1 })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({ description: 'Nombre del producto', type: String, example: 'Paracetamol' })
  @MinLength(3, {
    message: 'El nombre debe tener al menos 3 caracteres',
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Descripción del producto',
    type: String,
    example: 'Medicamento para aliviar el dolor y la fiebre',
  })
  @MinLength(3, {
    message: 'La descripcion debe tener al menos 3 caracteres',
  })
  @IsString()
  descripcion: string;

  @ApiProperty({
    description: 'Categoría del producto',
    type: () => CreateCategoryDto,
    example: { id: 1, nombre: 'Medicamentos' },
  })
  @ValidateNested()
  @Type(() => CreateCategoryDto)
  categorie: CreateCategoryDto;

  @ApiProperty({ description: 'Marca del producto', type: () => CreateBrandDto, example: { id: 1, nombre: 'Bayer' } })
  @ValidateNested()
  @Type(() => CreateBrandDto)
  brand: CreateBrandDto;

  @ApiProperty({ description: 'Precio del producto', type: Number, example: 10000 })
  @IsNumber()
  @IsPositive({
    message: 'El precio debe ser un número positivo',
  })
  precio: number;

  @ApiProperty({ description: 'SKU del producto', type: String, example: 'SKU98765' })
  @IsString({
    message: 'El SKU debe ser un string',
  })
  sku: string;

  @ApiProperty({ description: 'Imagen del producto', type: String, example: 'https://example.com/paracetamol.jpg' })
  @IsString({
    message: 'La imagen debe ser un string',
  })
  imagen: string;

  @ApiProperty({ description: 'Estado del producto', enum: ['activo', 'inactivo'], example: 'activo' })
  @IsEnum(['activo', 'inactivo'], {
    message: 'El estado debe ser "activo" o "inactivo"',
  })
  estado: 'activo' | 'inactivo';
}
