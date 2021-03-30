import axios from 'axios';
import Head from 'next/head';
import GlobalProvider from '../contexts/GlobalContext';
import checkAuthClient from '../helpers/checkAuthClient';
import checkAuthServer from '../helpers/checkAuthServer';
import initialPropsRedirect from '../helpers/initalPropsRedirect';
import App from '../views/Main';

interface HomeProps {
  userData: UserData
}

export interface UserData {
  img: string;
  name: string;
  xp: number;
  completedCount: number;
  themeName: string;
}

function Home({ userData }: HomeProps) {
  return (
    <>
    <GlobalProvider userData={userData}>
      <Head>
          <title>pomoFit</title>
      </Head>
      <App />
    </GlobalProvider>
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

  const me = await axios.get('/auth/me', {headers: {Cookie: `pfsID=${authCookie}`}}).then(req => req.data);
  return {userData: me};
  
}