import { Controller } from '@types';
import { getRandomChallenge } from '@models/challenges';
import { completeChallenge, incrementUserStartedCount } from '@models/users';

export const start: Controller = async (req, res) => {
  const challenge = await getRandomChallenge();
  
  const { userId } = req.session;
  await incrementUserStartedCount(userId);

  res.json(challenge);
};

export const complete: Controller = async (req, res) => {
  const { userId } = req.session;
  const { challenge: { id: challengeId } } = req.body;

  await completeChallenge(userId, challengeId);

  res.sendStatus(200);
};
