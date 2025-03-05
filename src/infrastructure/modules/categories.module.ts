import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/domain/entities/category.entity';
import { CategoriesController } from '../controllers/categories.controller';
import { CategoriesService } from '../services/categories.service';
import { DomainModule } from 'src/domain/domain.module';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  controllers: [CategoriesController],
  imports: [DomainModule,ApplicationModule],
})
export class CategoriesModule {}
