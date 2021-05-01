import { google } from 'googleapis';
import Problem from 'api-problem';
import { GoogleAccount } from '@types';

require('dotenv').config();

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_AUTH_REDIRECT_URI,
} = process.env;

function createConnection() {
  return new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_AUTH_REDIRECT_URI,
  );
}

async function getGoogleAccountFromCode(code: string): Promise<GoogleAccount> {
  const auth = createConnection();

  try {
    const { tokens } = await auth.getToken(code);
    const userData = await auth.verifyIdToken({
      idToken: tokens.id_token,
      audience: GOOGLE_CLIENT_ID,
    }).then((ticket) => ticket.getPayload());

    const { email, name, picture: img, sub: googleId } = userData;

    return { googleId, name, email, img };
  } catch (e) {
    const err = { problem: new Problem(400, 'Invalid token.') };
    throw err;
  }
}

export default getGoogleAccountFromCode;
