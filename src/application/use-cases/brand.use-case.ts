import { BrandRepository } from "src/domain/repositories/brand.repository";
import { CreateBrandDto } from "../dtos/brands/create-brand.dto";
import { Inject } from "@nestjs/common";
import { UpdateBrandDto } from "../dtos/brands/update-brand.dto";



export class BrandUseCase {
  constructor(
    @Inject(BrandRepository) private readonly brandRepository: BrandRepository
  ) {}

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