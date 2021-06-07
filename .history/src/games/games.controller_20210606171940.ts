import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GamesService } from './games.service';
import { Game } from './game.entity';
import { CreateGameDto } from './dto/create-game.dto';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';

@Controller('games')
@UseGuards(AuthGuard())
export class PlayersController {
  constructor(private gamesService: GamesService) {}

  @Get()
  getGames(@Query() filterDto: GetGamesFilterDto): Promise<Game[]> {
    return this.gamesService.getPlayers(filterDto);
  }

  @Get('/:id')
  getGameById(@Param('id') id: string): Promise<Game> {
    return this.gamesService.getPlayerById(id);
  }

  @Post()
  createGame(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesService.createGame(createGameDto);
  }

  @Delete('/:id')
  deleteGame(@Param('id') id: string): Promise<void> {
    return this.gamesService.deletePlayer(id);
  }
}
