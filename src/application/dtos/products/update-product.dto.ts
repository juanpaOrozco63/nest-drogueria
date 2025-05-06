import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Category } from 'src/domain/entities/category.entity';
import { Brand } from 'src/domain/entities/brand.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    categorie: Category; // Usar la entidad Category directamente
    brand: Brand; // Usar la entidad Brand directamente
}