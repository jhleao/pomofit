import { Challenge } from '@types';
import api from '..';

export interface ChallengesClient {
  start: () => Promise<Challenge> | Promise<null>;
  cancel: () => Promise<Boolean>;
  complete: (ch : Challenge) => Promise<Boolean>;
}

const createChallengesClient = ({handleApiError, setIsLoading, showUIError}) => {

  const start = async () => {
    try{
      setIsLoading(true);
      const res = await api.post('/challenges/start');
      setIsLoading(false);
      return res.data;
    } catch(e) {
      setIsLoading(false);
      if(e.res?.data?.title) handleApiError(e.res.data)
      else showUIError();
      return null;
    };
  };

  const cancel = async () => {
    try{
      setIsLoading(true);
      await api.post('/challenges/cancel');
      setIsLoading(false);
      return true;
    } catch(e) {
      setIsLoading(false);
      if(e.res?.data?.title) handleApiError(e.res.data)
      else showUIError();
      return false;
    };
  };

  const complete = async (challenge: Challenge) => {
    try{
      setIsLoading(true);
      await api.post('/challenges/complete', {challenge});
      setIsLoading(false);
      return true
    } catch(e) {
      setIsLoading(false);
      if(e.res?.data?.title) handleApiError(e.res.data)
      else showUIError();
      return false;
    };
  };

  return {start, complete, cancel}
}

export default createChallengesClient;