import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  // Relación uno a uno con Product (Un producto tiene un inventario)
  @OneToOne(() => Product, (product) => product.inventario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: Product;
  
  @Column('int')
  cantidad: number;

  @Column('int' , { default: 5 })
  stock_minimo: number;
}
