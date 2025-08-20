import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { RoadsController } from './roads.controller';
import { RoadsService } from './roads.service';
import { RiversController } from './rivers.controller';
import { RiversService } from './rivers.service';
import { UnitsController } from './units.controller';
import { UnitsService } from './units.service';

@Module({
  imports: [],
  controllers: [AppController, PlacesController, RoadsController, RiversController, UnitsController],
  providers: [AppService, PlacesService, RoadsService, RiversService, UnitsService],
})
export class AppModule {}
