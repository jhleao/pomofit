import { IncomingMessage } from "node:http"

export interface UserData {
  img: string;
  name: string;
  xp: number;
  themeName: string;
  completedCount: number;
  failedCount: number;
  startedCount: number;
  canceledCount: number;
  ranking: number;
}

export interface Challenge {
  type: string,
  description: string,
  xp: number,
}

export interface LeaderboardData {
  position: number;
  user: {
    name: string, 
    imgUrl: string, 
    level: number};
  completedCount: number, 
  totalExp: number
}

declare module 'node:http' {
  export interface IncomingMessage{
    cookies: any;
  }
}
