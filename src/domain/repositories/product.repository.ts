import { CreateProductDto } from "src/application/dtos/products/create-product.dto";
import { Product } from "../entities/product.entity";

export abstract class ProductRepository {
  abstract create(product: CreateProductDto): Promise<Product>;
  abstract update(id: number, product: Partial<Product>): Promise<Product>;
  abstract remove(id: number): Promise<void>;
  abstract findOne(id: number): Promise<Product | null>;
  abstract findAll(): Promise<Product[]>;
}
