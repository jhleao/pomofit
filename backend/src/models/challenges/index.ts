import pool from '@models/.';
import { Challenge } from '@types';

export const getRandomChallenge = async (): Promise<Challenge> => {
  const allChallenges = await pool.query(
    'SELECT * FROM challenges',
  ).then((q) => q.rows);

  const challengeIndex = Math.floor(Math.random() * allChallenges.length);
  const challenge = allChallenges[challengeIndex];

  return challenge;
};

type GetChallengeXp = Promise<number | undefined>;

export const getChallengeXp = async (id: string): GetChallengeXp => pool.query(
  'SELECT xp FROM challenges WHERE id = $1', [id],
).then((q) => q.rows[0]?.xp);
