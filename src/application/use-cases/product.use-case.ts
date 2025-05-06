import {  Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/application/dtos/products/create-product.dto';
import { UpdateProductDto } from 'src/application/dtos/products/update-product.dto';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { ProductsDomainService } from 'src/domain/services/products-domain.service';

@Injectable()
export class ProductUseCase {
  constructor(private readonly productRepository: ProductRepository, private readonly productDomainService: ProductsDomainService) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }
  findAll() {
    return this.productRepository.findAll();
  }

  findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.remove(id);
  }
  findByName(name: string) {
    return this.productRepository.findByName(name);
  }
}
