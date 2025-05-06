# Proyecto Nest Tienda

Este proyecto es una aplicación desarrollada con NestJS para gestionar una tienda.

## Requisitos

- [Node.js](https://nodejs.org/) instalado en tu sistema.
- [Nest CLI](https://docs.nestjs.com/cli/overview) instalado globalmente. Puedes instalarlo con el siguiente comando:
  ```bash
  npm install -g @nestjs/cli
  ```
- [Docker](https://www.docker.com/) y [Docker Desktop](https://www.docker.com/products/docker-desktop) instalados en tu sistema.
- [Docker Compose](https://docs.docker.com/compose/) incluido con Docker Desktop o instalado por separado.

## Instalación

1. Clona este repositorio:
  ```bash
  git clone https://github.com/juanpaOrozco63/nest-tienda.git
  cd nest-drogueria
  ```

2. Asegúrate de tener configurado Docker y Docker Compose.

3. Clona el archivo `.env` en la raíz del proyecto con las variables de entorno necesarias. Puedes basarte en el archivo `.env.template` incluido en el repositorio.

## Uso

Para levantar los servicios necesarios, ejecuta el siguiente comando:

```bash
docker-compose up
```

Esto iniciará los contenedores definidos en el archivo `docker-compose.yml`.

## Arrancar el proyecto con npm

Después de levantar los contenedores de Docker debes arrancar el proyecto localmente con el siguiente comando:

```bash
npm run start:dev
```

Asegúrate de tener instaladas las dependencias con `npm install` antes de ejecutar este comando.

## Ejecutar la seed

Si deseas cargar la data inicial en la base de datos, ejecuta el siguiente endpoint:

```bash
curl --location --request POST 'http://localhost:3000/seed'
```

## Endpoints

Una vez que los contenedores estén en ejecución, puedes acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

Para acceder a la interfaz de UI Kafka, utiliza el puerto [http://localhost:8080](http://localhost:8080).

Para acceder a la documentación de la API, dirígete a [http://localhost:3000/api-doc](http://localhost:3000/api-doc).
