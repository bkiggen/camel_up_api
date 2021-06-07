import { EntityRepository, Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-game.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { Game } from './games.entity';

@EntityRepository(Game)
export class PlayersRepository extends Repository<Game> {
  async createPlayer(createPlayerDto: CreateGameDto): Promise<Game> {
    const { playerName, character } = createGameDto;

    const player = this.create({
      playerName,
      character,
      money: 0,
    });

    await this.save(player);

    return player;
  }

  async getPlayers(filterDto: GetPlayersFilterDto): Promise<Player[]> {
    const { search, character } = filterDto;
    const query = this.createQueryBuilder('player');
    if (character) {
      query.andWhere('player.character = :character', { character: character });
    }
    if (search) {
      query.andWhere('LOWER(player.playerName) LIKE LOWER(:search)', {
        search: `%${search}%`,
      });
    }

    const players = await query.getMany();
    return players;
  }
}
