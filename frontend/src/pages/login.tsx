import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import checkAuthClient from '../helpers/checkAuthClient';
import checkAuthServer from '../helpers/checkAuthServer';
import initialPropsRedirect from '../helpers/initalPropsRedirect';
import light from '../themes/light';
import Login from '../views/Login';


function LoginPage() {
  return (
    <>      
    <ThemeProvider theme={light}>
    <GlobalStyles/>
      <Head>
        <title>pomoFit | Login</title>
      </Head>
      <Login />
    </ThemeProvider>

    </>
  )
}

export default LoginPage;

LoginPage.getInitialProps = async ctx => {
  const isServer = typeof window === 'undefined';
  if(isServer){
    const authCookie = ctx.req?.cookies.pfsID
    const isAuthenticated = await checkAuthServer({cookie: authCookie});
    if(isAuthenticated) initialPropsRedirect({res: ctx.res, to: '/'});
    return {auth: isAuthenticated};
  } else {
    const isAuthenticated = await checkAuthClient();
    if(isAuthenticated) initialPropsRedirect({res: ctx.res, to: '/'});
    return {auth: isAuthenticated};
  }
}