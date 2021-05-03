import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

export type Controller = (req: Request, res: Response) => void;
export type Middleware = (req: Request, res: Response, next: NextFunction) => void;
export type ErrorHandler =
  (err: HttpError, req: Request, res: Response, next: NextFunction) => void;

export type GoogleAccount = {
  googleId: string,
  name: string,
  email: string,
  img: string,
};

export type Account = {
  googleId?: string,
  name: string,
  email: string,
  img: string,
};

/* eslint camelcase : 0 */

export type dbUser = {
  id?: string;
  google_id?: string;
  name?: string;
  email?: string;
  img?: string;
  xp?: number;
  theme_name?: string;
  started_count?: number;
  completed_count?: number;
};

export type User = {
  id?: string;
  google_id?: string;
  name?: string;
  email?: string;
  img?: string;
  xp?: number;
  themeName?: string;
  startedCount?: number;
  completedCount?: number;
  ranking: number;
}

export type Challenge = {
  id: string;
  type: string;
  description: string;
  xp: number;
}

declare module 'express-session' {
  interface SessionData {
    userId?: string;
  }
}
