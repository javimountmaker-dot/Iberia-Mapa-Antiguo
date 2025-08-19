import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  findAll(year?: string, bbox?: string, q?: string) {
    // TODO: Implement query to PostGIS database using parameters
    return [];
  }
}
