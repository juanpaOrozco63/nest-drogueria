import {
  IsString,
  IsNumber,
  IsPositive,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCategoryDto } from '../categories/create-category.dto';
import { CreateBrandDto } from '../brands/create-brand.dto';

export class CreateProductDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @ValidateNested()
  @Type(() => CreateCategoryDto)
  categorie: CreateCategoryDto;

  @ValidateNested()
  @Type(() => CreateBrandDto)
  brand: CreateBrandDto;

  @IsNumber()
  @IsPositive()
  precio: number;

  @IsNumber()
  @IsPositive()
  stock: number;

  @IsString()
  sku: string;

  @IsString()
  imagen: string;

  @IsEnum(['activo', 'inactivo'], {
    message: 'El estado debe ser "activo" o "inactivo"',
  })
  estado: 'activo' | 'inactivo';
}
