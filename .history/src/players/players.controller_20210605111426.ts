import { Controller, Get } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './players.model';
@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  getAllPlayers(): Player[] {
    return this.playersService.getAllPlayers();
  }
}
