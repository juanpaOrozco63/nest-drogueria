import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/domain/entities/brand.entity';
import { BrandsController } from '../controllers/brands.controller';
import { BrandsService } from '../services/brands.service';
import { DomainModule } from 'src/domain/domain.module';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  controllers: [BrandsController],
  imports:[DomainModule, ApplicationModule],
})
export class BrandsModule {}
