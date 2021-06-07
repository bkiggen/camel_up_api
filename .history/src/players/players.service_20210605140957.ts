import { Injectable } from '@nestjs/common';
import { Player, PlayerCharacter } from './players.model';
import { CreatePlayerDto } from './dto/create-player.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  getAllPlayers(): Player[] {
    return this.players;
  }

  getPlayersWithFilters(filterDto: GetPlayersFilterDto): Player[] {
    const { playerName, character } = filterDto;
  }

  createPlayer(createPlayerDto: CreatePlayerDto): Player {
    const { playerName } = createPlayerDto;
    const player: Player = {
      id: uuid(),
      playerName,
      character: PlayerCharacter.JEFF,
      money: 0,
    };
    this.players.push(player);

    return player;
  }

  getPlayerById(id: string): Player {
    return this.players.find((player) => player.id === id);
  }

  deletePlayer(id: string): void {
    this.players = this.players.filter((p) => p.id !== id);
  }

  updatePlayerName(id: string, playerName: string): Player {
    const player = this.getPlayerById(id);
    console.log(player);
    player.playerName = playerName;
    console.log(player);

    return player;
  }
}
