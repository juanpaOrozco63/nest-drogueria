import { Module } from '@nestjs/common';
import { ProductRepository } from '../domain/repositories/product.repository';
import { ProductRepositoryImpl } from 'src/infrastructure/repositories/product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Brand } from './entities/brand.entity';
import { BrandRepositoryImpl } from 'src/infrastructure/repositories/brand.repository';
import { BrandRepository } from './repositories/brand.repository';
import { CategorieRepositoryImpl } from 'src/infrastructure/repositories/categorie.repository';
import { CategorieRepository } from './repositories/categorie.repository';
import { Category } from './entities/category.entity';
import { ProductsDomainService } from './services/products-domain.service';
import { BrandsDomainService } from './services/brands-domain.service';
import { CategoriesDomainService } from './services/categories-domain.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category])],
  providers: [
    {
      provide: ProductRepository,
      useClass: ProductRepositoryImpl,
    },
    {
      provide: BrandRepository,
      useClass: BrandRepositoryImpl,
    },
    {
      provide: CategorieRepository,
      useClass: CategorieRepositoryImpl,
    },
    CategorieRepositoryImpl,
    BrandRepositoryImpl,
    ProductRepositoryImpl,
    ProductsDomainService,
    BrandsDomainService,
    CategoriesDomainService
  ],
  exports: [ProductRepository, BrandRepository, CategorieRepository,
    ProductsDomainService, BrandsDomainService,CategoriesDomainService
  ],
})
export class DomainModule {}
