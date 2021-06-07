import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';
import { Game } from './game.entity';

@EntityRepository(Game)
export class GamesRepository extends Repository<Game> {
  async createGame(createGameDto: CreateGameDto): Promise<Game> {
    const { gameName } = createGameDto;

    const game = this.create({
      gameName,
    });

    await this.save(game);

    return game;
  }

  async getGameById(id: string): Promise<Game> {
    const game = await this.findOne(id);

    if (!game) {
      throw new NotFoundException(`Game with ID: ${id} not found`);
    }

    return game;
  }

  async getGames(filterDto: GetGamesFilterDto): Promise<Game[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('game');

    if (search) {
      query.andWhere('LOWER(game.gameName) LIKE LOWER(:search)', {
        search: `%${search}%`,
      });
    }

    const games = await query.getMany();
    return games;
  }
}
