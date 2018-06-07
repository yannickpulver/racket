import {SingleGame} from "./SingleGame";

export interface Match {
  team1: string;
  team2: string;
  round: number;
  date: Date;
  singleGames: SingleGame[];
  duoGames: SingleGame[];
}

export interface MatchIntern {
  team1: string;
  team1_name: string;
  team2: string;
  team2_name: string;
  round: number;
  date: Date;
  singleGames: SingleGame[];
  duoGames: SingleGame[];
}
