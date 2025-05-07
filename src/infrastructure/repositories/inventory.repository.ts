import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from 'src/domain/entities/inventory.entity';
import { Product } from 'src/domain/entities/product.entity';
import { InventoryRepository } from 'src/domain/repositories/inventory.repository';
import { LessThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class InventoryRepositoryImpl extends InventoryRepository {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super();
  }

  async create(productId: number, quantity: number): Promise<Inventory> {
    // Buscar el producto por ID
    const product = await this.productRepository.findOneBy({ id: productId });

    // Verificar si el producto existe
    if (!product) {
      throw new Error(`El producto con ID ${productId} no existe.`);
    }

    // Crear el inventario con el producto y la cantidad
    const inventory = this.inventoryRepository.create({ product, cantidad:quantity });

    // Guardar el inventario en la base de datos
    return this.inventoryRepository.save(inventory);
  }

  async updateStock(productId: number, quantity: number): Promise<Inventory> {
    // Buscar el producto por ID
    const product = await this.productRepository.findOneBy({ id: productId });

    // Verificar si el producto existe
    if (!product) {
      throw new Error(`El producto con ID ${productId} no existe.`);
    }

    // Buscar el inventario asociado al producto
    let inventory = await this.inventoryRepository.findOne({
      where: { product: { id: productId } },
      relations: ['product'],
    });

    // Si no existe el inventario, crearlo
    if (!inventory) {
      inventory = this.inventoryRepository.create({
        product,
        cantidad: quantity, // Asignar la cantidad inicial
      });
    } else {
      // Si el inventario existe, actualizar la cantidad
      inventory.cantidad = quantity;
    }

    // Guardar el inventario en la base de datos
    return this.inventoryRepository.save(inventory);
  }

  async findByProductId(productId: number): Promise<Inventory | null> {
    return this.inventoryRepository.findOne({ where: { product: { id: productId } } });
  }

  async getLowStock(quantity: number): Promise<Inventory[]> {
    return this.inventoryRepository.find({
      where: { cantidad: LessThanOrEqual(quantity) }, // Reemplaza 5 con el valor deseado si es fijo
      relations: ['product'], // Incluye la relación con el producto si es necesario
    });
  }
}
