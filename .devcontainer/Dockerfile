FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
  curl ca-certificates build-essential git unzip wget gnupg lsb-release \
  gdal-bin python3-pip python3 postgresql-client jq && \
  rm -rf /var/lib/apt/lists/*

# Tippecanoe
RUN wget -q https://github.com/mapbox/tippecanoe/releases/download/1.36.0/tippecanoe-1.36.0.linux-x86_64.zip \
 && unzip tippecanoe-1.36.0.linux-x86_64.zip -d /usr/local/bin \
 && rm tippecanoe-1.36.0.linux-x86_64.zip

# Tegola
RUN wget -q https://github.com/go-spatial/tegola/releases/download/v0.20.0/tegola_linux_amd64.zip \
 && unzip tegola_linux_amd64.zip -d /usr/local/bin \
 && rm tegola_linux_amd64.zip

# Node (opcional, por si trabajamos frontend aquí)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
 && apt-get update && apt-get install -y nodejs

WORKDIR /workspaces
