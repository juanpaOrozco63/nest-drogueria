import { Module } from '@nestjs/common';
import { BrandsController } from '../controllers/brands.controller';
import { DomainModule } from 'src/domain/domain.module';
import { ApplicationModule } from 'src/application/application.module';
import { BrandsService } from '../services/brands.service';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports:[DomainModule, ApplicationModule],
})
export class BrandsModule {}
