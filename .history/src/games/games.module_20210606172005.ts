import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './games.controller';
import { GamesRepository } from './games.repository';
import { GamesService } from './games.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([GamesRepository]), AuthModule],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
