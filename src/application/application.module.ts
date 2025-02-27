import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { ProductUseCase } from './use-cases/product.use-case';
import { BrandUseCase } from './use-cases/brand.use-case';

@Module({
    imports: [DomainModule],
    providers: [ProductUseCase,BrandUseCase],
    exports: [ProductUseCase,BrandUseCase]
})
export class ApplicationModule {}
