import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '@contexts/GlobalContext';
import App from '@views/Main';
import { UserData } from '@types';
import { NextPage } from 'next';
import { DashboardRoute } from '@components/ProtectedRoutes';

interface HomeProps {
  me: UserData | null
}

const Home: NextPage<HomeProps> = ({ me }) => {
  // const Router = useRouter();
  // if(!userData) Router.push('/login');

  const { setUserData } = useContext(GlobalContext);
  useEffect(() => setUserData(me), []);

  return (
    <>
      <Head>
        <title>pomoFit</title>
      </Head>
      <App />
    </>
  );
};

export default DashboardRoute(Home);
