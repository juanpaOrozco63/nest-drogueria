import { Module } from '@nestjs/common';
import { ProductRepository } from '../domain/repositories/product.repository';
import { ProductRepositoryImpl } from 'src/infrastructure/repositories/product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Brand } from './entities/brand.entity';
import { BrandRepositoryImpl } from 'src/infrastructure/repositories/brand.repository';
import { BrandRepository } from './repositories/brand.repository';

@Module({
    imports:[TypeOrmModule.forFeature([Product,Brand])],
    providers:[
        {
            provide:ProductRepository,
            useClass:ProductRepositoryImpl
        },
        {
            provide:BrandRepository,
            useClass:BrandRepositoryImpl
        },
        BrandRepositoryImpl,
        ProductRepositoryImpl
    ],
    exports:[ProductRepository,BrandRepository]
})
export class DomainModule {}
