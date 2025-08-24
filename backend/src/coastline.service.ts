import { Injectable } from '@nestjs/common';

@Injectable()
export class CoastlineService {
  constructor() {}

  findAll(year?: number) {
    // TODO: Integrate with PostGIS to filter coastline by year
    return [];
  }
}
