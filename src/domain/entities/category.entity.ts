import { Product } from 'src/domain/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  // Relación inversa con Product
  @OneToMany(() => Product, (product) => product.categorie)
  products: Product[];
}
