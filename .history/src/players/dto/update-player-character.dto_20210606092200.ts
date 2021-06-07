import { IsEnum } from 'class-validator';
import { PlayerCharacter } from '../player.model';

export class UpdatePlayerCharacterDto {
  @IsEnum(PlayerCharacter)
  character: PlayerCharacter;
}
