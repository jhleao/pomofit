import pool from '@models/.';
import { dbUser } from '@types';

export const userExists = async (id: string) => pool.query(
  'SELECT * FROM users WHERE id = $1', [id],
).then((query) => !!query.rows[0]);

export const getRankingOfUser = async (id: string) => {
  const allUsers = await pool.query(
    'SELECT * FROM users ORDER BY xp DESC',
  ).then((query) => query.rows);

  const ranking = allUsers.findIndex((u: dbUser) => u.id === id) + 1;

  return ranking;
};
