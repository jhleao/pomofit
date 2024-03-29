import { GoogleLogin } from 'react-google-login';
import { Div, GoogleIcon } from './style';

const GoogleLoginButton = ({ text, smallText, onSuccess }) => {
  const onFailure = (res) => {
    console.log('[Login Failed]');
    console.log(res);
  };

  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      render={(ps) => (
        <Div onClick={ps.onClick}>
          <GoogleIcon />
          <span>{text}</span>
          <span>{smallText}</span>
        </Div>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={false}
      accessType='offline'
      responseType='code'
    />
    
  );
};

export default GoogleLoginButton;
