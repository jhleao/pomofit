import api from './apiConfig';

interface checkAuthServerDTO {
  cookie: string;
}

const cookieName = process.env.COOKIE_NAME;

export default async function checkAuthServer({cookie}: checkAuthServerDTO){
  return await api.get('/auth', { headers: {Cookie: `${cookieName}=${cookie}`}})
    .then(req => req.data);
}