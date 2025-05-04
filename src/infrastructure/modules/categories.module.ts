import { Module } from '@nestjs/common';
import { CategoriesController } from '../controllers/categories.controller';
import { CategoriesService } from '../services/categories.service';
import { DomainModule } from 'src/domain/domain.module';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [DomainModule,ApplicationModule],
})
export class CategoriesModule {}
