import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './player.model';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerCharacterDto } from './dto/update-player-character.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  // @Get()
  // getPlayers(@Query() filterDto: GetPlayersFilterDto): Player[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.playersService.getPlayersWithFilters(filterDto);
  //   } else {
  //     return this.playersService.getAllPlayers();
  //   }
  // }

  // // tasks/id
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Player {
  //   return this.playersService.getPlayerById(id);
  // }

  // @Post()
  // createPlayer(@Body() createPlayerDto: CreatePlayerDto): Player {
  //   return this.playersService.createPlayer(createPlayerDto);
  // }

  // @Delete('/:id')
  // deletePlayer(@Param('id') id: string): void {
  //   return this.playersService.deletePlayer(id);
  // }

  // @Patch('/:id/character')
  // updatePlayerCharacter(
  //   @Param('id') id: string,
  //   @Body() updatePlayerCharacterDto: UpdatePlayerCharacterDto,
  // ): Player {
  //   const { character } = updatePlayerCharacterDto;
  //   return this.playersService.updatePlayerCharacter(id, character);
  // }
}
