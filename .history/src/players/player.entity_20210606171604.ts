import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlayerCharacter } from './player-character.enum';
import { Game } from 'src/players/player.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  playerName: string;

  @Column()
  character: PlayerCharacter;

  @Column()
  money: number;

  @ManyToMany(() => Game)
  @JoinTable()
  games: Game[];
}
