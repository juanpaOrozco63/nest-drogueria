import { Module } from '@nestjs/common';
import { InventoryController } from '../controllers/inventory.controller';
import { InventoryService } from '../services/inventory.service';
import { DomainModule } from 'src/domain/domain.module';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [DomainModule,ApplicationModule],
})
export class InventoryModule {}
