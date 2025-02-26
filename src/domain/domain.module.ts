import { Module } from '@nestjs/common';
import { ProductRepository } from '../domain/repositories/product.repository';
import { ProductRepositoryImpl } from 'src/infrastructure/repositories/product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Product])],
    providers:[
        {
            provide:ProductRepository,
            useClass:ProductRepositoryImpl
        },
        ProductRepositoryImpl
    ],
    exports:[ProductRepository]
})
export class DomainModule {}
