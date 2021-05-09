import { UserData } from '@types';
import { NextPage } from 'next';
import getUserServerSide from '@api/auth/getUserServerSide';
import getUserClientSide from '@api/auth/getUserClientSide';
import nextRedirect from '@helpers/nextRedirect';

interface DashboardHOC {
  pageInitialProps: any,
  me: UserData,
}

export const DashboardRoute = (Page) => {

  const HOC: NextPage<DashboardHOC> = ({pageInitialProps, me}) => {
    return Page({...pageInitialProps, me})
  }

  HOC.getInitialProps = async (ctx) => {
    const isServer = typeof window === 'undefined';

    const cookieName = process.env.NEXT_PUBLIC_COOKIE_NAME;
    const cookie = isServer ? ctx.req.cookies[cookieName] : null;

    const user = isServer ? await getUserServerSide(cookie) : await getUserClientSide();
    
    const isAuth = !!user
    if(!isAuth) nextRedirect({to: '/login' , res: ctx.res});

    if(Page.getInitialProps){
      const pageInitialProps = await Page.getInitialProps(ctx, user);
      return {pageInitialProps, me: user};
    } else {
      return {pageInitialProps: {}, me: user};
    }
  }  

  return HOC;
}

export const LoginRoute = (Page) => {

  const HOC: NextPage<DashboardHOC> = ({pageInitialProps, me}) => {
    return Page({...pageInitialProps, me})
  }

  HOC.getInitialProps = async (ctx) => {
    const isServer = typeof window === 'undefined';

    const cookieName = process.env.NEXT_PUBLIC_COOKIE_NAME;
    const cookie = isServer ? ctx.req.cookies[cookieName] : null;

    const user = isServer ? await getUserServerSide(cookie) : await getUserClientSide();
    
    const isAuth = !!user
    if(isAuth) nextRedirect({to: '/' , res: ctx.res});

    if(Page.getInitialProps){
      const pageInitialProps = await Page.getInitialProps(ctx, user);
      return {pageInitialProps, me: user};
    } else {
      return {pageInitialProps: {}, me: user};
    }
  }  

  return HOC;
}
