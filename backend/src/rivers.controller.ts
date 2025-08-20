import { Controller, Get, Query } from '@nestjs/common';
import { RiversService } from './rivers.service';

@Controller('rivers')
export class RiversController {
  constructor(private readonly riversService: RiversService) {}

  @Get()
  findAll(@Query('year') year?: string) {
    const yearNum = year ? parseInt(year, 10) : undefined;
    return this.riversService.findAll(yearNum);
  }
}
