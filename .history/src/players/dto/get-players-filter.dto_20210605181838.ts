import { IsOptional } from 'class-validator';
import { PlayerCharacter } from '../players.model';

export class GetPlayersFilterDto {
  @IsOptional()
  character?: PlayerCharacter;

  @IsOptional()
  search?: string;
}
