import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        // ClientsModule.register([
        //   {
        //     name: 'KAFKA_SERVICE',
        //     transport: Transport.KAFKA,
        //     options: {
        //       client: {
        //         brokers: ['localhost:9092'], // Asegúrate de que Kafka esté corriendo
        //       },
        //       consumer: {
        //         groupId: 'my-consumer-group',
        //       },
        //     },
        //   },
        // ]),
      ],
      providers: [], // Definimos los servicios Kafka
      exports: [], // Exportamos el servicio Kafka para usarlo en otros módulos
    })
export class KafkaModule {}
