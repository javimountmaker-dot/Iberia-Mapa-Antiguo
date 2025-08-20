import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteService {
  constructor() {}

  async computeRoute(year: number, mode: string, waypoints: any[]): Promise<any> {
    // TODO: Implement real routing logic using PostGIS/pgRouting
    // For now, return a dummy result
    return {
      distance_km: 0,
      time_min: 0,
      geometry: []
    };
  }
}
