import { Injectable } from '@nestjs/common';
import { Player, PlayerCharacter } from './players.model';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  getAllPlayers(): Player[] {
    return this.players;
  }

  createPlayer(name: string, character: string): Player {
    const player: Player = {
      id: 0,
      name: '',
      character: PlayerCharacter.JEFF,
      money: 0,
    };
  }
}
