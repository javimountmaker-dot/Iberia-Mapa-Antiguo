#!/bin/bash
# Script to generate MBTiles using tippecanoe from GeoJSON sources for Ancient Maps MVP.
# Accepts input path to GeoJSON file and output MBTiles path and optional layer name.
# Use environment variables or arguments to configure paths.
set -e

INPUT=${1:-"../data/seed/roads.geojson"}
OUTPUT=${2:-"../tiles/roads.mbtiles"}
LAYER=${3:-"roads"}

# Ensure required command is installed
if ! command -v tippecanoe &> /dev/null; then
  echo "tippecanoe could not be found. Please install tippecanoe first."
  exit 1
fi

echo "Generando MBTiles para la capa $LAYER desde $INPUT..."

# Generar mosaico vectorial con simplificación automática por zoom (-zg)
tippecanoe -o "$OUTPUT" -l "$LAYER" -zg "$INPUT"

echo "Finalizada la generación de $OUTPUT"
