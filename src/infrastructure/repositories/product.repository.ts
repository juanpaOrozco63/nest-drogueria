import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../../domain/entities/product.entity";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { CreateProductDto } from "src/application/dtos/products/create-product.dto";

@Injectable()
export class ProductRepositoryImpl extends ProductRepository {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {
        super();
    }

    async create(product: CreateProductDto): Promise<Product> {
        const newProduct = this.productRepository.create(product);
        return await this.productRepository.save(newProduct);
    }

    async update(id: number, product: Partial<Product>): Promise<Product> {
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
      return this.productRepository.createQueryBuilder('product')
        .where('product.nombre ILIKE :name', { name: `${name}%` })
        .getMany();
    }
}
