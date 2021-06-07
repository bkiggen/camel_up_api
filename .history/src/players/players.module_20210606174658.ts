import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './players.controller';
import { PlayersRepository } from './players.repository';
import { PlayersService } from './players.service';
import { GamesService } from 'src/games/games.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PlayersRepository]), AuthModule],
  controllers: [PlayersController],
  providers: [PlayersService, GamesService],
})
export class PlayersModule {}
