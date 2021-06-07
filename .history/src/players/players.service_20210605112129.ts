import { Injectable } from '@nestjs/common';
import { Player, PlayerCharacter } from './players.model';
import { v4 } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  getAllPlayers(): Player[] {
    return this.players;
  }

  createPlayer(name: string, character: string): Player {
    const player: Player = {
      id: '',
      name: '',
      character: PlayerCharacter.JEFF,
      money: 0,
    };
  }
}
