import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PreciosPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type == 'body') {
      value.precio = Number(value.precio);
      if (value.precio <= 1000) {
        throw new HttpException({
          status: 400,
          error: 'El precio debe ser mayor a 1000',
        }, 400
        )
      }
    }
    return value;
  }
}
