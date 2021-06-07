import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './players.controller';
import { PlayersRepository } from './players.repository';
import { PlayersService } from './players.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlayersRepository])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
