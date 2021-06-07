import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player, PlayerCharacter } from './players.model';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  getAllPlayers(): Player[] {
    return this.playersService.getAllPlayers();
  }

  @Post()
  createPlayer(@Body() createPlayerDto: CreatePlayerDto): Player {
    return this.playersService.createPlayer(createPlayerDto);
  }
}
