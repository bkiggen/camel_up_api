import { EntityRepository, Repository } from 'typeorm';
import { Player } from './player.entity';

@EntityRepository(Player)
export class PlayersRepository extends Repository<Player> {}
