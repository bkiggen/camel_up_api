import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';
import { GamesRepository } from './games.repository';
import { Game } from './game.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(GamesRepository)
    private gamesRepository: GamesRepository,
  ) {}

  getGames(filterDto: GetGamesFilterDto): Promise<Game[]> {
    return this.gamesRepository.getPlayers(filterDto);
  }

  createGame(createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesRepository.createPlayer(createGameDto);
  }

  async getGameById(id: string): Promise<Game> {
    const found = await this.gamesRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Player with ID: ${id} not found`);
    }

    return found;
  }

  async deleteGame(id: string): Promise<void> {
    const result = await this.gamesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Player with ID: ${id} not found`);
    }
  }

  // async updatePlayerCharacter(
  //   id: string,
  //   character: PlayerCharacter,
  // ): Promise<Game> {
  //   const player = await this.getPlayerById(id);

  //   player.character = character;

  //   await this.gamesRepository.save(player);
  //   return player;
  // }
}
