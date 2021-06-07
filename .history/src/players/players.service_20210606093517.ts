import { Injectable, NotFoundException } from '@nestjs/common';
import { Player, PlayerCharacter } from './player-character.enum';
import { CreatePlayerDto } from './dto/create-player.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  // getAllPlayers(): Player[] {
  //   return this.players;
  // }
  // getPlayersWithFilters(filterDto: GetPlayersFilterDto): Player[] {
  //   const { search, character } = filterDto;
  //   let players = this.getAllPlayers();
  //   if (search) {
  //     players = players.filter((p) => p.playerName.includes(search));
  //   }
  //   if (character) {
  //     players = players.filter((p) => p.character === character);
  //   }
  //   return players;
  // }
  // createPlayer(createPlayerDto: CreatePlayerDto): Player {
  //   const { playerName, character } = createPlayerDto;
  //   const player: Player = {
  //     id: uuid(),
  //     playerName,
  //     character: PlayerCharacter[character],
  //     money: 0,
  //   };
  //   this.players.push(player);
  //   return player;
  // }
  // getPlayerById(id: string): Player {
  //   const found = this.players.find((player) => player.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Player with ID: ${id} not found`);
  //   } else {
  //     return found;
  //   }
  // }
  // deletePlayer(id: string): void {
  //   const found = this.getPlayerById(id);
  //   this.players = this.players.filter((p) => p.id !== found.id);
  // }
  // updatePlayerCharacter(id: string, character: PlayerCharacter): Player {
  //   const player = this.getPlayerById(id);
  //   player.character = PlayerCharacter[character];
  //   return player;
  // }
}
