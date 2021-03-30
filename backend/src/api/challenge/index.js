const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  //Consultar no DB e enviar novo challenge
})

router.post('/complete', (req, res) => {
  const { challenge } = req.body;
});

module.exports = router;
