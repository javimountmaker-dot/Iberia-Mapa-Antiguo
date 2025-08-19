# Guía de despliegue local (MVP Iberia)

## Requisitos
- Docker y Docker Compose instalados.
- Scripts `etl_hillshade.sh`, `tippecanoe.sh` y `seed.sql.sh` con permisos de ejecución.

## Pasos

1. Clonar este repositorio y cambiar a la rama `feat/mvp-iberia-bootstrap`.
2. Copiar `.env.example` a `.env` y ajustar variables si es necesario (por ejemplo, `DB_USER`, `DB_PASS`).
3. Levantar los servicios desde la carpeta `infra/`:
   ```bash
   cd infra
   docker compose up -d
   ```
   Esto iniciará:
   - `db`: contenedor con **PostGIS**.
   - `api`: backend **NestJS** (en desarrollo).
   - `tegola`: servidor de teselas vectoriales.
4. Importar los datos de semillas (GeoJSON de Iberia):
   ```bash
   cd infra/scripts
   ./seed.sql.sh
   ```
   Este script cargará los archivos de `data/seed` en la base de datos PostGIS.
5. Generar teselas vectoriales para las vías (y otras capas):
   ```bash
   ./tippecanoe.sh ../data/seed/roads.geojson ../tiles/roads.mbtiles roads
   ```
   Ajusta los nombres de archivo y capa según la capa que quieras convertir.
6. Generar el **hillshade** (sombreado de relieve):
   ```bash
   ./etl_hillshade.sh
   ```
   Este script utiliza un DEM en `data/dem`. Si no existe, crea un hillshade de prueba.
7. Acceder a la aplicación (cuando esté disponible):
   - **API REST**: http://localhost:3000
   - **Tegola**: http://localhost:9000
   - **Frontend**: http://localhost:5173 (una vez implementado y arrancado con Vite).

## Notas
- Si utilizas Windows, puede que necesites dar permisos de ejecución a los scripts `.sh` usando `chmod +x nombre.sh` en WSL o Git Bash.
- Para detener los servicios: `docker compose down`.
- Para reiniciar con datos limpios, elimina volúmenes: `docker compose down -v`.
