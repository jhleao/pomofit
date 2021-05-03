import axios from 'axios';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import GlobalProvider, { GlobalContext } from '@contexts/GlobalContext';
import checkAuthClient from '@helpers/checkAuthClient';
import checkAuthServer from '@helpers/checkAuthServer';
import initialPropsRedirect from '@helpers/initalPropsRedirect';
import App from '@views/Main';
import { UserData } from '@types';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface HomeProps {
  userData: UserData | null
}

const Home: NextPage<HomeProps> = ({ userData }) => {

  // const Router = useRouter();
  // if(!userData) Router.push('/login');

  const { setUserData } = useContext(GlobalContext);
  useEffect(() => setUserData(userData), [])

  return (
    <>
      <Head>
          <title>pomoFit</title>
      </Head>
      <App />
    </>
  )
}

export default Home;

Home.getInitialProps = async ctx => {
  const isServer = typeof window === 'undefined';
  const authCookie = ctx.req?.cookies.pfsID

  if(isServer){
    const isAuthenticated = await checkAuthServer({cookie: authCookie});
    if(!isAuthenticated) initialPropsRedirect({res: ctx.res, to: '/login'});
  } else {
    const isAuthenticated = await checkAuthClient();
    if(!isAuthenticated) initialPropsRedirect({res: ctx.res, to: '/login'});
  }

  try {
    //TODO: axios não aceita setar esse header programaticamente
    const me = await axios.get('/auth/me', {headers: {Cookie: `pfsID=${authCookie}`}}).then(req => req.data);
    return {userData: me};
  } catch {
    initialPropsRedirect({res: ctx.res, to: '/login'});
    return {userData: null};
  }
  
}