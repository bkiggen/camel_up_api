import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerCharacter } from './player-character.enum';
import { CreateGameDto } from './dto/create-game.dto';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';
import { GamesRepository } from './games.repository';
import { Player } from './games.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(GamesRepository)
    private gamesRepository: GamesRepository,
  ) {}

  getPlayers(filterDto: GetGamesFilterDto): Promise<Player[]> {
    return this.playersRepository.getPlayers(filterDto);
  }

  createPlayer(createGameDto: CreateGameDto): Promise<Player> {
    return this.playersRepository.createPlayer(createPlayerDto);
  }

  async getPlayerById(id: string): Promise<Player> {
    const found = await this.playersRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Player with ID: ${id} not found`);
    }

    return found;
  }

  async deletePlayer(id: string): Promise<void> {
    const result = await this.playersRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Player with ID: ${id} not found`);
    }
  }

  async updatePlayerCharacter(
    id: string,
    character: PlayerCharacter,
  ): Promise<Player> {
    const player = await this.getPlayerById(id);

    player.character = character;

    await this.playersRepository.save(player);
    return player;
  }
}
