import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

@Module({
  imports: [],
  controllers: [AppController, PlacesController],
  providers: [AppService, PlacesService],
})
export class AppModule {}
