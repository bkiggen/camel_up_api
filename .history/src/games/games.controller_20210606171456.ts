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
import { PlayersService } from './games.service';
import { Game } from './game.entity';
import { CreateGameDto } from './dto/create-game.dto';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';

@Controller('games')
@UseGuards(AuthGuard())
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  getPlayers(@Query() filterDto: GetGamesFilterDto): Promise<Game[]> {
    return this.playersService.getPlayers(filterDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Game> {
    return this.playersService.getPlayerById(id);
  }

  @Post()
  createPlayer(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.playersService.createPlayer(createGameDto);
  }

  @Delete('/:id')
  deletePlayer(@Param('id') id: string): Promise<void> {
    return this.playersService.deletePlayer(id);
  }
}
