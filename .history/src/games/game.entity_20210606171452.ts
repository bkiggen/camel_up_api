import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Player } from 'src/players/player.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gameName: string;

  @ManyToMany(() => Player)
  @JoinTable()
  players: Player[];
}
