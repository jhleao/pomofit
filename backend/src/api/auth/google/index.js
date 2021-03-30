const { Router } = require('express');
const router = Router();
const { getGoogleAccountFromCode } = require('../../../util/googleAuth');
const accountHandler = require('../../../util/accountHandler');

router.post('/', async (req, res) => {
  const { code } = req.body;
  const googleData = await getGoogleAccountFromCode(code);
  const user = await accountHandler(googleData);

  const {id, name, img, xp,
    theme_name: themeName, 
    completed_count: completedCount} = user;

  req.session.userId = user.id;
  res.send({id, name, img, xp, themeName, completedCount});
})

module.exports = router;