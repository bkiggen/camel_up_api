import { EntityRepository, Repository } from 'typeorm';
import { Player } from './player.entity';

@EntityRepository(Player)
export class PlayersRespository extends Repository<Player> {}
