import api from './apiConfig';

const checkAuthClient = async () =>{ 
  return await api.get(`/auth`).then(r => r.data);
}
export default checkAuthClient;