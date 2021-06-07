export interface Player {
  id: string;
  name: string;
  character: PlayerCharacter;
  money: number;
}

export enum PlayerCharacter {
  DONNA = 'DONNA',
  JEFF = 'JEFF',
}
