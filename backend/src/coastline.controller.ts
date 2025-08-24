import { Controller, Get, Query } from '@nestjs/common';
import { CoastlineService } from './coastline.service';

@Controller('coastline')
export class CoastlineController {
  constructor(private readonly coastlineService: CoastlineService) {}

  @Get()
  findAll(@Query('year') year: string) {
    const yr = year ? parseInt(year, 10) : undefined;
    return this.coastlineService.findAll(yr);
  }
}
