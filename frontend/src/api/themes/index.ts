import api from '..';

export interface ThemesClient {
  toggle: () => Promise<Boolean>;
}

const createThemesClient = ({handleApiError, setIsLoading, showUIError}) => {

  const toggle = async () => {
    try{
      setIsLoading(true);
      const res = await api.post('/themes/toggle');
      setIsLoading(false);
      return true;
    } catch(e) {
      setIsLoading(false);
      if(e.res?.data?.title) handleApiError(e.res.data)
      else showUIError();
      return false;
    };
  };

  return {toggle}
}

export default createThemesClient;