import React, { useContext, useEffect } from 'react'
import GoogleLoginButton from '../../components/GoogleLogin';
import Link from 'next/link';
import ApiContext from '../../contexts/ApiContext';
import { PageContainer, Container, Section, Text, Img } from './style';
import checkAuthClient from '../../helpers/checkAuthClient';

interface gLoginPs {
  code: string;
}

const Login = () => {

  const { googleAuth } = useContext(ApiContext);

  const googleLoginHandler = 
    async ({code}: gLoginPs) => await googleAuth(code);

  return (
    <PageContainer>
      <Container>
        <Section>
          <Img src={`/logo/2.svg`} />
          <Text>Bem vindo(a)! Faça seu login.</Text>
          <GoogleLoginButton text='Entrar com o Google' onSuccess={googleLoginHandler}/>
          <a onClick={async () => console.log(await checkAuthClient())}>Teste</a>
        </Section>
      </Container>
    </PageContainer>
  )
}

export default Login

