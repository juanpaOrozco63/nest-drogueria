import {
  IsString,
  IsNumber,
  IsPositive,
  ValidateNested,
  IsEnum,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCategoryDto } from '../categories/create-category.dto';
import { CreateBrandDto } from '../brands/create-brand.dto';

export class CreateProductDto {
  @IsNumber()
  id: number;

  @MinLength(3, {
    message: 'El nombre debe tener al menos 3 caracteres',
  })
  @IsString()
  nombre: string;

  @MinLength(3, {
    message: 'La descripcion debe tener al menos 3 caracteres',
  })
  @IsString()
  descripcion: string;

  @ValidateNested()
  @Type(() => CreateCategoryDto)
  categorie: CreateCategoryDto;

  @ValidateNested()
  @Type(() => CreateBrandDto)
  brand: CreateBrandDto;

  @IsNumber()
  @IsPositive(
    {
      message: 'El precio debe ser un número positivo',
    }
  )
  precio: number;

  @IsNumber()
  @IsPositive({
    message: 'El stock debe ser un número positivo',
  })
  stock: number;

  @IsString({
    message: 'El SKU debe ser un string',
  })
  sku: string;

  @IsString({
    message: 'La imagen debe ser un string',
  })
  imagen: string;

  @IsEnum(['activo', 'inactivo'], {
    message: 'El estado debe ser "activo" o "inactivo"',
  })
  estado: 'activo' | 'inactivo';
}
