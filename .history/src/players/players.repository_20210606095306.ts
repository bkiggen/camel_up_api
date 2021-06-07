import { EntityRepository, Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './player.entity';

@EntityRepository(Player)
export class PlayersRepository extends Repository<Player> {
  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { playerName, character } = createPlayerDto;

    const player = this.create({
      playerName,
      character,
      money: 0,
    });

    await this.save(player);

    return player;
  }
}
