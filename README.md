# Proyecto Nest Tienda

Este proyecto es una aplicación desarrollada con NestJS para gestionar una tienda.

## Requisitos

- [Docker](https://www.docker.com/) y [Docker Desktop](https://www.docker.com/products/docker-desktop) instalados en tu sistema.
- [Docker Compose](https://docs.docker.com/compose/) incluido con Docker Desktop o instalado por separado.

## Instalación

1. Clona este repositorio:
  ```bash
  git clone https://github.com/tu-usuario/nest-tienda.git
  cd nest-tienda
  ```

2. Asegúrate de tener configurado Docker y Docker Compose.

3. Crea un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias. Puedes basarte en el archivo `.env.example` incluido en el repositorio.

## Uso

Para levantar los servicios necesarios, ejecuta el siguiente comando:

```bash
docker-compose up
```

Esto iniciará los contenedores definidos en el archivo `docker-compose.yml`.

## Endpoints

Una vez que los contenedores estén en ejecución, puedes acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

Para acceder a la interfaz de UI Kafka, utiliza el puerto [http://localhost:8080](http://localhost:8080).

Para acceder a la documentación de la API, dirígete a [http://localhost:3000/api-doc](http://localhost:3000/api-doc).

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).