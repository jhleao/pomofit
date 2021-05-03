import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import checkAuthClient from '../helpers/checkAuthClient';
import checkAuthServer from '../helpers/checkAuthServer';
import initialPropsRedirect from '../helpers/initalPropsRedirect';
import light from '../themes/light';
import Login from '../views/Login';

const LoginPage: NextPage = () => {
  return (
    <>      
    <GlobalStyles/>
      <Head>
        <title>pomoFit | Login</title>
      </Head>
      <Login />
    </>
  )
}

export default LoginPage;

LoginPage.getInitialProps = async ctx => {
  const isServer = typeof window === 'undefined';

  if(isServer){
    const authCookie = ctx.req?.cookies.pfsID
    console.log({authCookie});
    const isAuthenticated = await checkAuthServer({cookie: authCookie});
    console.log({isAuthenticated, isServer});
    if(isAuthenticated) initialPropsRedirect({res: ctx.res, to: '/'});
    return {auth: isAuthenticated};
  } else {
    const isAuthenticated = await checkAuthClient();
    console.log({isAuthenticated, isServer});
    if(isAuthenticated) initialPropsRedirect({res: ctx.res, to: '/'});
    return {auth: isAuthenticated};
  }

}