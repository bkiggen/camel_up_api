import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from 'src/players/player.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gameName: string;

  players: Player[];
}
