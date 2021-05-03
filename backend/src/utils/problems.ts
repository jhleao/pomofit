import Problem from 'api-problem';

export const invalidJSON = new Problem(400, 'Invalid JSON.');
export const notLoggedIn = new Problem(400, 'Not logged in.');
