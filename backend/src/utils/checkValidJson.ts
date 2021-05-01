import { ErrorHandler } from '@types';
import { invalidJSON } from '@utils/problems';

const checkValidJson: ErrorHandler = (err, req, res, next) => {
  const isJsonError = err.status === 400 && err instanceof SyntaxError && 'body' in err;
  
  if (isJsonError) return invalidJSON.send(res);
  return next();
};

export default checkValidJson;
