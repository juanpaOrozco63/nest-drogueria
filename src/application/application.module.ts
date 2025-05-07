import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { ProductUseCase } from './use-cases/product.use-case';
import { BrandUseCase } from './use-cases/brand.use-case';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { CategoriesUseCase } from './use-cases/categories.use-case';
import { InventoryUseCase } from './use-cases/inventory.use-case';

@Module({
  imports: [DomainModule],
  providers: [ProductUseCase, BrandUseCase, CategoriesUseCase, InventoryUseCase, LoggerInterceptor, TransformInterceptor],
  exports: [ProductUseCase, BrandUseCase, LoggerInterceptor, InventoryUseCase, CategoriesUseCase, TransformInterceptor],
})
export class ApplicationModule {}
