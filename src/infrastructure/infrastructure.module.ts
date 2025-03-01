import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './modules/products.module';
import { CategoriesModule } from './modules/categories.module';
import { BrandsModule } from './modules/brands.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [BrandsModule, CategoriesModule, ProductsModule],
  exports: [],
})
export class InfrastructureModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
