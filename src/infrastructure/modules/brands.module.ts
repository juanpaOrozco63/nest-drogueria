import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/domain/entities/brand.entity';
import { BrandsController } from '../controllers/brands.controller';
import { BrandsService } from '../services/brands.service';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports:[TypeOrmModule.forFeature([Brand])],
  exports: [BrandsService,TypeOrmModule]
})
export class BrandsModule {}
