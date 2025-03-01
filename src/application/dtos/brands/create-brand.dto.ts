import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Product } from 'src/domain/entities/product.entity';

export class CreateBrandDto {
  @IsNumber()
  id: number;

  @IsString()
  nombre: string;

  @IsOptional()
  products: Product[];
}
