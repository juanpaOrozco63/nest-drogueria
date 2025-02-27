import { Injectable } from '@nestjs/common';
import { BrandRepository } from 'src/domain/repositories/brand.repository';
import { CreateBrandDto } from '../dtos/brands/create-brand.dto';
import { UpdateBrandDto } from '../dtos/brands/update-brand.dto';

@Injectable()
export class BrandUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}

  create(createBrandDto: CreateBrandDto) {
    return this.brandRepository.create(createBrandDto);
  }

  findAll() {
    return this.brandRepository.findAll();
  }

  findOne(id: number) {
    return this.brandRepository.findOne(id);
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.brandRepository.update(id, updateBrandDto);
  }

  remove(id: number) {
    return this.brandRepository.remove(id);
  }
}
