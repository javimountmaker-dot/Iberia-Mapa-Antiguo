# Frontend - Ancient Maps (MVP Iberia)

Este directorio contiene la aplicación frontend de Ancient Maps, desarrollada con React y Leaflet (o MapLibre). Esta aplicación proporciona la interfaz de usuario de la PWA que muestra el mapa histórico y permite buscar lugares, visualizar capas, usar el deslizador temporal y calcular rutas.

## Requisitos

- Node.js >= 16
- npm o yarn
- Variables de entorno según `.env.example` (por ejemplo, URL de la API)

## Estructura

- `src/` – componentes React, hooks y utilidades:
  - `map/` – componentes del mapa y control de capas
  - `components/` – buscador, deslizador temporal, calculadora de rutas, medidor
  - `services/` – llamadas a la API
- `public/manifest.json` – definición de la PWA
- `vite.config.ts` – configuración de Vite
- `Dockerfile` – define cómo construir la imagen Docker del frontend

## Desarrollo

Instala las dependencias y ejecuta la app en modo de desarrollo:

```
npm install
npm run dev
```

Accede a `http://localhost:5173` (por defecto) para ver la aplicación.

## Build y despliegue

Para generar una build optimizada:

```
npm run build
```

La carpeta `dist/` contendrá los archivos listos para servir. El Dockerfile facilita el despliegue junto a `docker-compose.yml`.

## Funcionalidades MVP

- Mapa base satélite y capa histórica con relieve/hillshade
- Buscador con autocompletar (lugares antiguos y modernos)
- Control de capas para activar/desactivar vías, ríos, ciudades y polities
- Deslizador temporal (−500 a 0 cada 50 años) que filtra las entidades
- Calculadora de rutas básica con modos marcha ligera y a caballo
- Conversor de unidades (km, milla romana, estadio)

## Notas

- Las consultas al backend se realizan a través de los servicios en `src/services`.
- El diseño sigue las guías y paleta definidos en Fase 0.
