import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { ProductUseCase } from './use-cases/product.use-case';
import { BrandUseCase } from './use-cases/brand.use-case';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Module({
    imports: [DomainModule],
    providers: [ProductUseCase,BrandUseCase,LoggerInterceptor,TransformInterceptor],
    exports: [ProductUseCase,BrandUseCase,LoggerInterceptor,TransformInterceptor]
})
export class ApplicationModule {}
