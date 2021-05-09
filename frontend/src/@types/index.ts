import { IncomingMessage } from 'node:http';
import 'styled-components';

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

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      background: string,
      foreground: string,
      negative: string,
      positive: string,
      overlay: string,
      line: string,
      text: string,
      textHighlight: string,
      title: string,
      inactiveButton: string,
      inactiveButtonHover: string,
      activeButton: string,
      activeButtonHover: string,
    }
  }
}
