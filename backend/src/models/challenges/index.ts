import pool from '@models/.';

export const getRandomChallenge = async () => {
  const allChallenges = await pool.query(
    'SELECT * FROM challenges',
  ).then((q) => q.rows);

  const challengeIndex = Math.floor(Math.random() * allChallenges.length);
  const challenge = allChallenges[challengeIndex];

  return challenge;
};
