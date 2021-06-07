import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './players.model';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  getAllPlayers(): Player[] {
    return this.playersService.getAllPlayers();
  }

  @Post()
  createPlayer(
    @Body('name') playerName: string,
  )) {
    console.log('body', playerName);
  }
}
