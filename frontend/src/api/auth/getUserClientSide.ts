import axios from '@api/.';

export const getUserClientSide = async () => {
  try{
    const req = await axios.get('/auth/me');
    return req.data;
  } catch {return false}
}

export default getUserClientSide