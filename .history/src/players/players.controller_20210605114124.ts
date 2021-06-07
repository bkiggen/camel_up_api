import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player, PlayerCharacter } from './players.model';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  getAllPlayers(): Player[] {
    return this.playersService.getAllPlayers();
  }

  @Post()
  createPlayer(createTaskDto: CreateTaskDto): Player {
    return this.playersService.createPlayer(playerName, PlayerCharacter.JEFF);
  }
}
