import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteService {
  constructor() {}

  async computeRoute(year: number, mode: string, waypoints: any[]): Promise<any> {
    // For demonstration, compute distance using haversine formula and time based on mode.
    if (!waypoints || waypoints.length < 2) {
      return { distance_km: 0, time_min: 0, geometry: [] };
    }

    // Helper to convert degrees to radians
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    // Calculate total distance in kilometers
    let distance = 0;
    for (let i = 1; i < waypoints.length; i++) {
      const prev = waypoints[i - 1];
      const curr = waypoints[i];
      const R = 6371; // Earth radius in km
      const dLat = toRad(curr[1] - prev[1]);
      const dLon = toRad(curr[0] - prev[0]);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(prev[1])) *
          Math.cos(toRad(curr[1])) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      distance += R * c;
    }

    // Determine speed in km/h based on mode
    let speed = 5; // default march speed (marcha ligera)
    if (mode === 'a_caballo' || mode === 'horse') {
      speed = 8;
    }

    const timeHours = distance / speed;
    const timeMin = timeHours * 60;

    return {
      distance_km: parseFloat(distance.toFixed(2)),
      time_min: parseFloat(timeMin.toFixed(2)),
      geometry: {
        type: 'LineString',
        coordinates: waypoints
      }
    };
  }
}
