import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoryDto } from "src/application/dtos/categories/create-category.dto";
import { Category } from "src/domain/entities/category.entity";
import { CategorieRepository } from "src/domain/repositories/categorie.repository";
import { Repository } from "typeorm";


export class CategorieRepositoryImpl extends CategorieRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {
    super();
  }

  async create(categorie: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(categorie);
    return this.categoryRepository.save(category);
  }

  async update(id: number, category: Partial<Category>): Promise<Category> {
    await this.categoryRepository.update(id, category);
    return (await this.categoryRepository.findOne({ where: { id } }))!;
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async findOne(id: number): Promise<Category | null> {
    return await this.categoryRepository.findOne({ where: { id } });  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
}
