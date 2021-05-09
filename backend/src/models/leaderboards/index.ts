import pool from '@models/.';
import { dbUser, LeaderboardData } from '@types';
import getLevelFromXp from '@utils/getLevelFromXp';

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

export const getBoard = async (): Promise<LeaderboardData[]> => {
  const allUsers = await pool.query(
    'SELECT * FROM users ORDER BY xp DESC',
  ).then((query) => query.rows);

  const boardData = allUsers.reduce((acc, cur, i) => {
    const { name, img: imgUrl, xp: totalExp, completed_count: completedCount } = cur;

    const position = i + 1;

    const level = getLevelFromXp(totalExp);

    return [...acc, {
      position,
      user: {
        name,
        imgUrl,
        level,
      },
      completedCount,
      totalExp,
    }];
  }, []);

  return boardData;
};
