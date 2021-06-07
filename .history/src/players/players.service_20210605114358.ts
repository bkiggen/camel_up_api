import { Injectable } from '@nestjs/common';
import { Player, PlayerCharacter } from './players.model';
import { CreatePlayerDto } from './create-player.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  getAllPlayers(): Player[] {
    return this.players;
  }

  createPlayer(CreatePlayerDto: createPlayerDto): Player {
    const player: Player = {
      id: uuid(),
      playerName: '',
      character: PlayerCharacter.JEFF,
      money: 0,
    };
    this.players.push(player);

    return player;
  }
}
