import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [PlayersModule, GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
