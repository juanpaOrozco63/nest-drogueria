import { Module } from '@nestjs/common';
import { ProductsController } from '../controllers/products.controller';
import { DomainModule } from 'src/domain/domain.module';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  controllers: [ProductsController],
  imports: [DomainModule, ApplicationModule],
})
export class ProductsModule {}
