import { IsEnum } from 'class-validator';
import { PlayerCharacter } from '../players.model';

export class UpdatePlayerCharacterDto {
  @IsEnum(PlayerCharacter)
  character: PlayerCharacter;
}
