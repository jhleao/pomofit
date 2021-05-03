import api from '../api';

interface checkAuthServerDTO {
  cookie: string;
}

const cookieName = process.env.COOKIE_NAME;

export default async function checkAuthServer({cookie}: checkAuthServerDTO){
  try {
    await api.get('/auth', { headers: {Cookie: `${cookieName}=${cookie}`}})
    .then(req => req.data);
    return true;
  } catch {
    return false;
  }
  
}