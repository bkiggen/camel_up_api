import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlayerCharacter } from './player-character.enum';
import { Game } from 'src/games/game.entity';

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

  @ManyToOne((_type) => Game, (game) => game.players, { eager: false })
  games: Game[];
}
