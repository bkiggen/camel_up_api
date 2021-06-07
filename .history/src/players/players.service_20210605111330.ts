import { Injectable } from '@nestjs/common';
import { Task } from './player.model';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  getAllPlayers() {
    return this.players;
  }
}
