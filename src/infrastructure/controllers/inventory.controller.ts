import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { InventoryUseCase } from 'src/application/use-cases/inventory.use-case';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryUseCase: InventoryUseCase) {}

  @Post()
  register(@Body() dto: { productId: number; quantity: number }) {
    return this.inventoryUseCase.register(dto.productId, dto.quantity);
  }

  @Patch(':id')
  updateStock(@Param('id') id: number, @Body() dto: { quantity: number }) {
    return this.inventoryUseCase.updateStock(id, dto.quantity);
  }

  @Get('low-stock')
  getLowStock(@Query('quantity') quantity: number) {
    return this.inventoryUseCase.getLowStock(quantity);
  }
}
