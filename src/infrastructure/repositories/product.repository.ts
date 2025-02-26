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
        private readonly productRepo: Repository<Product>,
    ) {
        super();
    }

    async create(product: CreateProductDto): Promise<Product> {
        const newProduct = this.productRepo.create(product);
        return await this.productRepo.save(newProduct);
    }

    async update(id: number, product: Partial<Product>): Promise<Product> {
        await this.productRepo.update(id, product);
        return (await this.productRepo.findOne({ where: { id } }))!;
    }

    async remove(id: number): Promise<void> {
        await this.productRepo.delete(id);
    }

    async findOne(id: number): Promise<Product | null> {
        return await this.productRepo.findOne({ where: { id } });
    }

    async findAll(): Promise<Product[]> {
        return await this.productRepo.find();
    }
}
