import { IsNotEmpty, IsEnum } from 'class-validator';
import { PlayerCharacter } from '../player-character.enum';

export class CreatePlayerDto {
  @IsNotEmpty()
  playerName: string;

  @IsEnum(PlayerCharacter)
  character: PlayerCharacter;

  @IsNotEmpty()
  gameId: string;
}
