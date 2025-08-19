#!/bin/bash
# Script para cargar datos seed en PostGIS usando ogr2ogr.
# Recorre todos los ficheros GeoJSON en data/seed y los importa como tablas.
# Configura las variables de entorno para la conexión a la BD.

DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_NAME=${DB_NAME:-ancientmaps}
DB_USER=${DB_USER:-ancient}
DB_PASS=${DB_PASS:-maps}

# Comprueba que ogr2ogr está instalado
if ! command -v ogr2ogr &> /dev/null; then
  echo "ogr2ogr no se encuentra instalado. Instálalo como parte de GDAL."
  exit 1
fi

# Importar cada GeoJSON
for file in ../data/seed/*.geojson; do
  table=$(basename "$file" .geojson)
  echo "Importando $file a la tabla $table ..."
  ogr2ogr -f "PostgreSQL" \
    PG:"host=$DB_HOST port=$DB_PORT dbname=$DB_NAME user=$DB_USER password=$DB_PASS" \
    "$file" \
    -nln "$table" \
    -nlt PROMOTE_TO_MULTI \
    -lco GEOMETRY_NAME=geom \
    -lco FID=id \
    -lco PRECISION=NO \
    --config PG_USE_COPY YES
  echo "Finalizada la importación de $file"
done
