import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from 'src/players/player.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gameName: string;

  @ManyToMany(_type => Player, player => )
  players: Player[];
}
