import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PlayerCharacter } from './player.model';

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
}
