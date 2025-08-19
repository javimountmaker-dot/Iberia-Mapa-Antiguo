# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the NestJS application
RUN npm run build || true

# Expose port (default 3000)
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start:prod"]
