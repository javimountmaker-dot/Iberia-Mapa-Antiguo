# Backend - Ancient Maps (MVP Iberia)

Este directorio contiene el código fuente del backend de Ancient Maps, implementado con NestJS (Node.js + TypeScript). Proporciona una API REST para consultar los datos históricos y calcular rutas utilizando PostGIS y pgRouting.

## Estructura

- **src/**: módulos y servicios del backend
- **openapi.yaml**: documentación de la API
- **Dockerfile**: configuración para construir la imagen Docker del backend

## Requisitos

- Node.js >= 16
- PostgreSQL con las extensiones PostGIS y pgRouting (ver `infra/docker-compose.yml`)
- Variables de entorno definidas en el archivo `.env` (puedes basarte en `.env.example`)

## Instalación y desarrollo

```
npm install
npm run start:dev
```

Esto iniciará el servidor en modo desarrollo.

## Pruebas

```
npm run test
```

## Endpoints principales

- **GET /places?year=-200&bbox=&q=**: devuelve lugares activos (ciudades, puertos, minas).
- **GET /roads?year=-200&bbox=**: devuelve vías activas.
- **GET /rivers?year=-200&bbox=**: devuelve ríos activos.
- **POST /route**: calcula una ruta dada una lista de `waypoints`, el `year` y el `mode` (marcha_ligera, a_caballo).
- **GET /units/convert?from=km&to=milla_romana&value=10**: convierte unidades.

## Notas

- El grafo para el cálculo de rutas se construye a partir de la tabla `roads` y utiliza `pgr_dijkstra`.
- Puedes lanzar `docker compose up` desde la carpeta `infra/` para levantar la base de datos y los servicios de apoyo en local.
