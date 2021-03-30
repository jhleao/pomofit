const Problem = require('api-problem');

function checkValidJson(err, req, res, next){
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      const problem = new Problem(400, 'Invalid JSON.');
      problem.send(res);
  }
  next();
};

module.exports = checkValidJson;
