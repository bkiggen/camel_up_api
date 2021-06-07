import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Player } from 'src/players/player.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gameName: string;

  @OneToMany(_type => Player, player => player.game, eager: true)
  players: Player[];
}
