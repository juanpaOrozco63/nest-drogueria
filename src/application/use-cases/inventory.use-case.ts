import { Injectable } from "@nestjs/common";
import { InventoryRepository } from "src/domain/repositories/inventory.repository";

@Injectable()
export class InventoryUseCase {
  constructor(private readonly inventoryRepo: InventoryRepository) {}

  async register(productId: number, quantity: number) {
    return this.inventoryRepo.create(productId, quantity);
  }

  async updateStock(productId: number, quantity: number) {
    return this.inventoryRepo.updateStock(productId, quantity);
  }

  async getLowStock(quantity: number) {
    return this.inventoryRepo.getLowStock(quantity);
  }
}