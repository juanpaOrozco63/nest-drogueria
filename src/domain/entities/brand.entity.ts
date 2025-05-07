import { Product } from 'src/domain/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'brands' })
export class Brand {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  // Relación inversa con Product
  @OneToMany(() => Product, (product) => product.marca)
  products: Product[];
}
