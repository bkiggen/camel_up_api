import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './players.controller';
import { PlayersRepository } from './players.repository';
import { PlayersService } from './players.service';
import { GamesModule } from 'src/games/games.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayersRepository]),
    AuthModule,
    GamesModule,
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
