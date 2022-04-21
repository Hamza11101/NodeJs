const express = require('express');
const router = express.Router();
const SimControler = require('../controllers/Sim.Controler')



router.get('/sim',SimControler.getAllSims);

router.get('/sim/:id',SimControler.getOneSim);

router.post('/sim',SimControler.addOneSim);

router.put('/sim/:id',SimControler.updateOneSim);

router.delete('/sim/:id',SimControler.deleteOneSim);

router.put('/sim/affect/:idSim/:idPhone',SimControler.affect);

router.delete('/sim/affect/:idSim/:idPhone',SimControler.dessaffect)

module.exports = router;