import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from 'src/application/dtos/brands/create-brand.dto';
import { Brand } from 'src/domain/entities/brand.entity';
import { BrandRepository } from 'src/domain/repositories/brand.repository';
import { Repository } from 'typeorm';

export class BrandRepositoryImpl extends BrandRepository {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepo: Repository<Brand>,
  ) {
    super();
  }

  async create(brand: CreateBrandDto): Promise<Brand> {
       // Eliminar el campo `id` si está presente en el DTO
       const { id, ...brandData } = brand;
    const newBrand = this.brandRepo.create(brandData);
    return await this.brandRepo.save(newBrand);
  }

  async update(id: number, brand: Partial<Brand>): Promise<Brand> {
    await this.brandRepo.update(id, brand);
    return (await this.brandRepo.findOne({ where: { id } }))!;
  }

  async remove(id: number): Promise<void> {
    await this.brandRepo.delete(id);
  }

  async findOne(id: number): Promise<Brand | null> {
    return await this.brandRepo.findOne({ where: { id } });
  }

  async findAll(): Promise<Brand[]> {
    return await this.brandRepo.find();
  }
}
