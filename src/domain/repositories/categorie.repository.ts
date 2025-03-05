import { Category } from "../entities/category.entity";
import { CreateCategoryDto } from "src/application/dtos/categories/create-category.dto";

export abstract class CategorieRepository {
  abstract create(categorie: CreateCategoryDto): Promise<Category>;
  abstract update(id: number, category: Partial<Category>): Promise<Category>;
  abstract remove(id: number): Promise<void>;
  abstract findOne(id: number): Promise<Category | null>;
  abstract findAll(): Promise<Category[]>;
}