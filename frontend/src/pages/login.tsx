import { LoginRoute } from '@components/ProtectedRoutes';
import { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyles from '../GlobalStyles';
import Login from '../views/Login';

const LoginPage: NextPage = () => {
  return (
    <>      
      <Head>
        <title>pomoFit | Login</title>
      </Head>
      <Login />
    </>
  )
}

export default LoginRoute(LoginPage);
