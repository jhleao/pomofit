import React, { useContext } from 'react'
import GoogleLoginButton from '../../components/GoogleLogin';
import ApiContext from '../../contexts/ApiContext';
import { PageContainer, Container, Section, Text, Img } from './style';

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
        </Section>
      </Container>
    </PageContainer>
  )
}

export default Login

