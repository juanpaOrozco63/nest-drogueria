import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from 'src/application/dtos/brands/create-brand.dto';
import { UpdateBrandDto } from 'src/application/dtos/brands/update-brand.dto';

@Injectable()
export class BrandsService {
  create(createBrandDto: CreateBrandDto) {
    return 'This action adds a new brand';
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
