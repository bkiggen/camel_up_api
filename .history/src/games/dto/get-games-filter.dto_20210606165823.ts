import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PlayerCharacter } from '../player-character.enum';

export class GetGamesFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
}
