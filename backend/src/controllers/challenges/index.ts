import { Controller } from '@types';
import { getRandomChallenge } from '@models/challenges';

export const start: Controller = async (req, res) => {
  const challenge = await getRandomChallenge();

  res.json(challenge);
};

export const complete: Controller = async (req, res) => null;

export const cancel: Controller = async (req, res) => null;
