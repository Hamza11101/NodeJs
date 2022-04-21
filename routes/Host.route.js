// const { query } = require('express');
const express = require('express');
const router = express.Router();
const HostControler = require('../controllers/Host.Controler');
// get a list of hosts from the db
router.get('/hosts',HostControler.getAllHosts );

// get one host by id
router.get('/hosts/:id',HostControler.getOneHost );

//add a new host to the db
router.post("/hosts",HostControler.addOneHost );

// update a list of todo from the db
router.put('/hosts/:id', HostControler.updateOneHost );

//delete a hosts to the db
router.delete('/hosts/:id',HostControler.deleteOneHost  );

//affect host to todo
router.put('/hosts/affect/:idhost/:idroom',HostControler.affect)

// //affect host to todo
router.delete('/hosts/desaffect/:idhost/:idroom',HostControler.desaffect)

module.exports = router;