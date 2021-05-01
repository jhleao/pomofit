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
