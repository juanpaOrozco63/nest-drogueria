import { Inventory } from "../entities/inventory.entity";

export abstract class InventoryRepository {
    abstract findByProductId(productId: number): Promise<Inventory | null>;
    abstract updateStock(productId: number, quantity: number): Promise<Inventory>;
    abstract create(productId: number, quantity: number): Promise<Inventory>;
    abstract getLowStock(quantity:number): Promise<Inventory[]>;
  }