import { EntityRepository, Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { Player } from './player.entity';
import { Game } from 'src/games/game.entity';

@EntityRepository(Player)
export class PlayersRepository extends Repository<Player> {
  async createPlayer(
    createPlayerDto: CreatePlayerDto,
    game: Game,
  ): Promise<Player> {
    const { playerName, character } = createPlayerDto;

    const player = this.create({
      playerName,
      character,
      money: 0,
      // game: game,
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
