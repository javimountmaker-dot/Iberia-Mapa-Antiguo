#!/usr/bin/env bash
set -e

echo "GDAL: $(ogr2ogr --version || true)"
echo "Tippecanoe: $(tippecanoe --version || true)"
echo "Tegola: $(tegola version || true)"
