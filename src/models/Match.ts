import {SingleGame} from "./SingleGame";

export interface Match {
  team1: string;
  team2: string;
  round: number;
  date: Date;
  singleGames: SingleGame[];
  duoGames: SingleGame[];
}
