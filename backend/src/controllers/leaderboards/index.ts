import { Controller } from '@types';
import { getBoard } from '@models/leaderboards';

export const getLeaderboardData: Controller = async (req, res) => {
  const board = await getBoard();
  res.json(board);
};
