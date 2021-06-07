import { IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  playerName: string;

  @IsNotEmpty()
  character: string;
}
