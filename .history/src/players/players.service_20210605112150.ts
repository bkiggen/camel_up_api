import { Injectable } from '@nestjs/common';
import { Player, PlayerCharacter } from './players.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  getAllPlayers(): Player[] {
    return this.players;
  }

  createPlayer(name: string, character: string): Player {
    const player: Player = {
      id: uuid(),
      name: '',
      character: PlayerCharacter.JEFF,
      money: 0,
    };
  }
}
