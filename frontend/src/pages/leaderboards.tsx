import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import checkAuthClient from '../helpers/checkAuthClient';
import checkAuthServer from '../helpers/checkAuthServer';
import initialPropsRedirect from '../helpers/initalPropsRedirect';
import light from '../themes/light';
import Leaderboards from '../views/Leaderboards';
import Login from '../views/Login';


function LeaderboardsPage() {
  return (
    <>      
    <GlobalStyles/>
      <Head>
        <title>pomoFit | Ranking</title>
      </Head>
      <Leaderboards />
    </>
  )
}

export default LeaderboardsPage;

