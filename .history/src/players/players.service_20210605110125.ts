import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  private players = [];

  getAllPlayers() {
    return this.players;
  }
}
