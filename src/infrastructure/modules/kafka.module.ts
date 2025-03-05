import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaConsumerService } from '../kafka/kafka.consumer';
import { KafkaProducerService } from '../kafka/kafka.producer';

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'KAFKA_SERVICE',
            transport: Transport.KAFKA,
            options: {
              client: {
                brokers: ['localhost:9092'], // Asegúrate de que Kafka esté corriendo
              },
              consumer: {
                groupId: 'my-consumer-group',
              },
            },
          },
        ]),
      ],
      providers: [KafkaConsumerService,KafkaProducerService], // Definimos los servicios Kafka
      exports: [KafkaConsumerService,KafkaProducerService], // Exportamos el servicio Kafka para usarlo en otros módulos
    })
export class KafkaModule {}
