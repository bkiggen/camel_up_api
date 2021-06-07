import { IsNotEmpty, IsEnum } from 'class-validator';
import { PlayerCharacter } from '../player-character.enum';

export class CreateGameDto {
  @IsNotEmpty()
  playerName: string;

  @IsEnum(PlayerCharacter)
  character: PlayerCharacter;
}
