import { PlayerCharacter } from '../player.model';

export class GetPlayersFilterDto {
  character?: PlayerCharacter;
  search?: string;
}
