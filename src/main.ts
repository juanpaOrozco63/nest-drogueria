import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './application/interceptors/logger.interceptor';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza error si hay propiedades desconocidas
    }),
  );
  app.useGlobalInterceptors(new LoggerInterceptor());
  // Configurar Kafka como un microservicio
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: ['localhost:9092'], // Dirección de Kafka
  //     },
  //     consumer: {
  //       groupId: 'my-consumer-group', // Grupo de consumidores
  //     },
  //   },
  // });
 // Configuración de Swagger
 const config = new DocumentBuilder()
 .setTitle('API de Tienda') // Título de la API
 .setDescription('Documentación de la API para la tienda') // Descripción
 .setVersion('1.0') // Versión de la API
 .setTermsOfService('https://example.com/terms') // Términos de servicio
 .setContact('Soporte', 'https://example.com/contact', 'soporte@example.com') // Información de contacto
 .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-doc', app, document); // La documentación estará disponible en /api-doc
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
