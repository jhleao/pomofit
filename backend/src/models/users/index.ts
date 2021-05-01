import pool from '@models/.';

export const userExists = async (id: string) => pool.query(
  'SELECT * FROM users WHERE id = $1', [id],
).then((query) => !!query.rows[0]);
