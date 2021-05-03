import pool from '@models/.';
import { getChallengeXp } from '@models/challenges';
import { getRankingOfUser } from '@models/ranking';
import { dbUser, User } from '@types';

export const userExists = async (id: string) => pool.query(
  'SELECT * FROM users WHERE id = $1', [id],
).then((query) => !!query.rows[0]);

export const getUser = async (id: string): Promise<User> => {
  const u = await pool.query(
    'SELECT * FROM users WHERE id = $1', [id],
  ).then((query) => query.rows[0] as dbUser);

  const ranking = await getRankingOfUser(id);

  const {
    name, img, xp,
    completed_count: completedCount,
    started_count: startedCount,
    theme_name: themeName,
  } = u;

  return {
    id,
    img,
    name,
    xp,
    themeName,
    completedCount,
    startedCount,
    ranking,
  };
};

export const getUserIdFromGoogleId = async (googleId: string) => {
  const userId = await pool.query(
    'SELECT id FROM users WHERE google_id = $1',
    [googleId],
  ).then((q) => q.rows[0]?.id);

  if (!userId) return null;
  return userId;
};

export const incrementUserStartedCount = async (id: string) => pool.query(
  'UPDATE users SET started_count = started_count + 1 WHERE id = $1', [id],
);

export const completeChallenge = async (userId: string, challengeId: string) => {
  const challengeXp = await getChallengeXp(challengeId);

  await pool.query(
    `UPDATE users SET
    xp = xp + $2,
    completed_count = completed_count + 1
    WHERE id = $1`, [userId, challengeXp],
  );

  return true;
};
