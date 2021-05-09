import { DashboardRoute } from '@components/ProtectedRoutes';
import { GlobalContext } from '@contexts/GlobalContext';
import { UserData } from '@types';
import { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import GlobalStyles from '../GlobalStyles';
import Leaderboards from '../views/Leaderboards';

interface LeaderboardData {
  me: UserData | null
}

const LeaderboardsPage: NextPage<LeaderboardData> = ({ me }) => {
  const { setUserData } = useContext(GlobalContext);
  useEffect(() => setUserData(me), []);

  return (
    <>
    <GlobalStyles/>
      <Head>
        <title>pomoFit | Ranking</title>
      </Head>
      <Leaderboards />
    </>
  );
};

export default DashboardRoute(LeaderboardsPage);
