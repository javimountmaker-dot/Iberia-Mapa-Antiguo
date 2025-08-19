#!/bin/bash
# Script para generar hillshade a partir de un modelo de elevación (DEM).
# Requiere gdal y un archivo DEM en data/dem.
# Uso: bash infra/scripts/etl_hillshade.sh

DEM_FILE="$(dirname "$0")/../../data/dem/dem.tif"
HILLSHADE_OUTPUT="$(dirname "$0")/../../data/dem/hillshade.tif"

if [[ ! -f "$DEM_FILE" ]]; then
  echo "Pendiente: Proporcionar archivo DEM en data/dem/dem.tif";
  echo "Se generará un hillshade de ejemplo para continuar el flujo de trabajo.";
  # Crear un hillshade dummy (raster gris) como placeholder
  gdal_translate -of GTiff -scale 0 0 0 255 -outsize 1024 1024 -a_srs EPSG:4326 /dev/null "$HILLSHADE_OUTPUT" 2>/dev/null || \
  echo "Placeholder no generado (requiere gdal)";
else
  echo "Generando hillshade con gdaldem..."
  gdaldem hillshade "$DEM_FILE" "$HILLSHADE_OUTPUT" -z 1 -s 1 -az 315 -alt 45
fi

echo "Hillshade generado en $HILLSHADE_OUTPUT"
