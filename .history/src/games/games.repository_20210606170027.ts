import { EntityRepository, Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';
import { Game } from './games.entity';

@EntityRepository(Game)
export class GamesRepository extends Repository<Game> {
  async createPlayer(createGameDto: CreateGameDto): Promise<Game> {
    const { gameName } = createGameDto;

    const game = this.create({
      gameName,
    });

    await this.save(game);

    return game;
  }

  async getPlayers(filterDto: GetGamesFilterDto): Promise<Game[]> {
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
