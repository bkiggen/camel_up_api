export interface Player {
  id: number;
  name: string;
  character: PlayerCharacter;
  money: number;
}

export enum PlayerCharacter {
  DONNA = 'DONNA',
  JEFF = 'JEFF',
}
