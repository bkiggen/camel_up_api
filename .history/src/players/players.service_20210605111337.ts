import { Injectable } from '@nestjs/common';
import { Player } from './player.model';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  getAllPlayers() {
    return this.players;
  }
}