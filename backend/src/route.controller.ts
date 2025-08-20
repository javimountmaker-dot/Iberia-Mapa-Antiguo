import { Controller, Post, Body } from '@nestjs/common';
import { RouteService } from './route.service';

@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  async computeRoute(@Body() payload: { year: number; mode: string; waypoints: any[] }) {
    // Delegates to routeService. Payload can be validated via DTO.
    return this.routeService.computeRoute(payload.year, payload.mode, payload.waypoints);
  }
}
