import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port:+process.env.DB_PORT!,
      database:process.env.DB_NAME,
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      autoLoadEntities : true,
      synchronize : true // Cuando se crea un cambio en las entidades las sincroniza
    }),
    InfrastructureModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
