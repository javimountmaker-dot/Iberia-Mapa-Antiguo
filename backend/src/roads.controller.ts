import { Controller, Get, Query } from '@nestjs/common';
import { RoadsService } from './roads.service';

@Controller('roads')
export class RoadsController {
  constructor(private readonly roadsService: RoadsService) {}

  @Get()
  findAll(@Query('year') year: number) {
    return this.roadsService.findAll(year);
  }
}
