import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { CreateProductDto } from 'src/application/dtos/products/create-product.dto';
import { Category } from 'src/domain/entities/category.entity';
import { Brand } from 'src/domain/entities/brand.entity';

@Injectable()
export class ProductRepositoryImpl extends ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super();
  }

  async create(product: CreateProductDto): Promise<Product> {
    // Eliminar el campo `id` si está presente en el DTO
    const { id, ...productData } = product;
    const newProduct = this.productRepository.create(productData);
    return await this.productRepository.save(newProduct);
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
     // Verificar si la categoría y la marca existen
  if (product.categoria) {
    product.categoria = await this.productRepository.manager.findOneOrFail(Category, { where: { id: product.categoria.id } });
  }
  if (product.marca) {
    product.marca = await this.productRepository.manager.findOneOrFail(Brand, { where: { id: product.marca.id } });
  }

    await this.productRepository.update(id, product);
    return (await this.productRepository.findOne({ where: { id } }))!;
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findByName(name: string): Promise<Product[] | null> {
    return this.productRepository
      .createQueryBuilder('product')
      .where('product.nombre ILIKE :name', { name: `${name}%` })
      .getMany();
  }
}
