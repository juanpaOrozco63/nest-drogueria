import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products.module';
import { CategoriesModule } from './modules/categories.module';
import { BrandsModule } from './modules/brands.module';

@Module({
  imports: [BrandsModule, CategoriesModule, ProductsModule],
  exports: [],
})
export class InfrastructureModule {}
