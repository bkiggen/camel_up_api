import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PlayerCharacter } from '../player-character.enum';

export class GetPlayersFilterDto {
  @IsOptional()
  @IsEnum(PlayerCharacter)
  character?: PlayerCharacter;

  @IsOptional()
  @IsString()
  search?: string;
}
