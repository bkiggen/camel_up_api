import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
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

  // tasks/id
  @Get('/:id')
  getTaskById(@Param('id') id: string): Player {
    return this.playersService.getPlayerById(id);
  }

  @Post()
  createPlayer(@Body() createPlayerDto: CreatePlayerDto): Player {
    return this.playersService.createPlayer(createPlayerDto);
  }

  @Delete('/:id')
  deletePlayer(@Param('id') id: string): void {
    return this.playersService.deletePlayer(id);
  }

  @Patch('/:id/playerName')
  updatePlayerName(
    @Param('id') id: string,
    @Param('playerName') playerName: string,
    @Body() body: object,
  ): Player {
    console.log(body);
    return this.playersService.updatePlayerName(id, playerName);
  }
}
