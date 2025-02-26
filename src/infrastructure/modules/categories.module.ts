import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/domain/entities/category.entity';
import { CategoriesController } from '../controllers/categories.controller';
import { CategoriesService } from '../services/categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [TypeOrmModule.forFeature([Category])],
  exports: [CategoriesService,TypeOrmModule]
})
export class CategoriesModule {}
