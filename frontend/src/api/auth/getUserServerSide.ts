import axios from '@api/.';

const getUserServerSide = async (cookie) => {
  const cookieName = process.env.NEXT_PUBLIC_COOKIE_NAME;
  try{
    const req = await axios.get('/auth/me', { headers: { Cookie: `${cookieName}=${cookie}` }} )
    return req.data;
  } catch {return false}
}

export default getUserServerSide