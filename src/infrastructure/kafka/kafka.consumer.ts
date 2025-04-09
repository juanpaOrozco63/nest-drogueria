import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private readonly kafka = new Kafka({
    brokers: ['localhost:9092']
  });

  private readonly consumer = this.kafka.consumer({ groupId: 'my-consumer-group' });

  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'mi-topic', fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const messageValue = message.value ? message.value.toString() : 'null';
        console.log(`Mensaje recibido en ${topic}:`, messageValue);
      },
    });
  }
}
