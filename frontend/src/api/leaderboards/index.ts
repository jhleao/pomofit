import {  LeaderboardData } from '@types';
import api from '..';

export interface LeaderboardsClient {
  get: () => Promise<LeaderboardData[]> | Promise<null>;
}

const createLeaderboardsClient = ({handleApiError, setIsLoading, showUIError}) => {

  const get = async () => {
    try{
      setIsLoading(true);
      const res = await api.get('/leaderboards');
      setIsLoading(false);
      return res.data;
    } catch(e) {
      setIsLoading(false);
      if(e.res?.data?.title) handleApiError(e.res.data)
      else showUIError();
      return null;
    };
  };


  return {get}
}

export default createLeaderboardsClient;