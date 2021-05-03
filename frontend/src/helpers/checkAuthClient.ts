import api from '../api';

const checkAuthClient = async () =>{ 
  try{
    await api.get(`/auth`).then(r => r.data);
    return true;
  } catch {
    return false;
  }
}
export default checkAuthClient;