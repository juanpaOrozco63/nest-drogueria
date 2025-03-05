import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dtos/categories/create-category.dto';
import { CategorieRepository } from 'src/domain/repositories/categorie.repository';
import { UpdateCategoryDto } from '../dtos/categories/update-category.dto';



@Injectable()
export class CategoriesUseCase {
    constructor(
        private readonly categorieRepository: CategorieRepository
    ) {}

     create(createCategoryDto: CreateCategoryDto) {
        return this.categorieRepository.create(createCategoryDto);
    }

     findAll() {
        return this.categorieRepository.findAll();
    }

     findOne(id: number) {
        return this.categorieRepository.findOne(id);
    }

     update(id: number, updateCategoryDto: UpdateCategoryDto){
        return this.categorieRepository.update(id,updateCategoryDto);
    }

     remove(id: number){
        return this.categorieRepository.remove(id);
    }
}