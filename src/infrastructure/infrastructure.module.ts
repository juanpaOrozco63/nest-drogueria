import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './modules/products.module';
import { CategoriesModule } from './modules/categories.module';
import { BrandsModule } from './modules/brands.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { KafkaModule } from './modules/kafka.module';
import { SeedModule } from './modules/seed.module';
import { InventoryModule } from './modules/inventory.module';

@Module({
  imports: [BrandsModule, CategoriesModule, ProductsModule,KafkaModule, SeedModule, InventoryModule],
  exports: [KafkaModule],
})
export class InfrastructureModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
