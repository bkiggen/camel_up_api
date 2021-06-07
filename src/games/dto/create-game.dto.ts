import { IsNotEmpty, IsEnum } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  gameName: string;
}
