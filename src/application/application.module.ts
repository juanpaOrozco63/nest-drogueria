import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { ProductUseCase } from './use-cases/products/product.use-case';

@Module({
    imports: [DomainModule],
    providers: [ProductUseCase],
    exports: [ProductUseCase]
})
export class ApplicationModule {}
