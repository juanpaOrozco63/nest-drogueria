import { CreateBrandDto } from "src/application/dtos/brands/create-brand.dto";
import { Brand } from "../entities/brand.entity";




export abstract class BrandRepository {
    abstract create(brand: CreateBrandDto): Promise<Brand>;
    abstract update(id: number, brand: Partial<Brand>): Promise<Brand>;
    abstract remove(id: number): Promise<void>;
    abstract findOne(id: number): Promise<Brand | null>;
    abstract findAll(): Promise<Brand[]>;
}