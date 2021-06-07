import { IsNotEmpty, IsEnum } from 'class-validator';
import { PlayerCharacter } from '../players.model';

export class CreatePlayerDto {
  @IsNotEmpty()
  playerName: string;

  @IsEnum(PlayerCharacter)
  character: PlayerCharacter;
}
