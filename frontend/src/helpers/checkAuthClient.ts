import api from '../api';

const checkAuthClient = async () =>{ 
  return await api.get(`/auth`).then(r => r.data);
}
export default checkAuthClient;