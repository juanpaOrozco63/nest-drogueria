import { Brand } from 'src/domain/entities/brand.entity';
import { Category } from 'src/domain/entities/category.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  nombre: string;

  @Column('text')
  descripcion: string;

   // Relación con Category (Muchos productos pueden pertenecer a una categoría)
   @ManyToOne(() => Category, (category) => category.products, { eager: true })
   @JoinColumn({ name: 'categorie_id' }) // Define la clave foránea en la BD
   categorie: Category;
 
   // Relación con Brand (Muchos productos pueden pertenecer a una marca)
   @ManyToOne(() => Brand, (brand) => brand.products, { eager: true })
   @JoinColumn({ name: 'brand_id' }) // Define la clave foránea en la BD
   brand: Brand;

  @Column('decimal')
  precio: number;

  @Column('int')
  stock: number;

  @Column('varchar')
  sku: string;

  @Column('varchar')
  imagen: string;

  @Column({
    type: 'enum',
    enum: ['activo', 'inactivo'],
  })
  estado: 'activo' | 'inactivo';
}
