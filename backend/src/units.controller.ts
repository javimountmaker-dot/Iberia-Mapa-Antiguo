import { Controller, Get, Query } from '@nestjs/common';
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get('convert')
  convert(
       @Query('from') from: string,
    @Query('to') to: string,
    @Query('value') value: string,

    const val = parseFloat(value);
    return this.unitsService.convert(from, to, val);
  }
}
