import { EntityRepository, Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { GamesRepository } from './games.repository';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { Player } from './player.entity';

@EntityRepository(Player)
export class PlayersRepository extends Repository<Player> {
  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { playerName, character, gameId } = createPlayerDto;

    const game = await GamesRepository.findOne(gameId);

    if (!game) {
      throw new NotFoundException(`Game with ID: ${id} not found`);
    }

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