import { PlayerCharacter } from '../players.model';

export class GetPlayersFilterDto {
  character?: PlayerCharacter;
  search?: string;
}
