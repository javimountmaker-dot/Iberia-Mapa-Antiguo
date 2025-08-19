import { Controller, Get, Query } from '@nestjs/common';

@Controller('places')
export class PlacesController {
  @Get()
  findAll(@Query('year') year?: string, @Query('bbox') bbox?: string, @Query('q') q?: string) {
    // TODO: Implement logic to query places by year, bbox, and q
    return { message: 'This will return filtered places', year, bbox, q };
  }
}
