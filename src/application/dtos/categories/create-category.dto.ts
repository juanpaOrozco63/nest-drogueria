import {  IsNumber, IsOptional, IsString } from 'class-validator';
import { Product } from 'src/domain/entities/product.entity';

export class CreateCategoryDto {

  @IsNumber()
  id: number;

  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsOptional()
  products: Product[];
}
