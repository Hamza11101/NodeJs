const express = require("express");
const router = express.Router();
const PhoneControler = require('../controllers/Phone.Controler')

router.get('/phones',PhoneControler.getAllphones);


router.get('/phones/:id',PhoneControler.getOnePhone);

router.post('/phones',PhoneControler.addOnePhone);

router.put('/phones/:id',PhoneControler.updateOnePhone);


router.delete('/phones/:id',PhoneControler.deleteOnePhone);


router.put('/phones/affect/:idPhone/:idSim',PhoneControler.affect)

router.delete('/phones/affect/:idPhone/:idSim',PhoneControler.dessaffect)


module.exports = router;
