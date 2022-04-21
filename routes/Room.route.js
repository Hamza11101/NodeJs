// const { query } = require('express');
const express = require('express');
const router = express.Router();
const RoomControler = require('../controllers/Room.Controler');
// get a list of rooms from the db
router.get('/rooms',RoomControler.getAllRooms );


// get one room by id
router.get('/rooms/:id',RoomControler.getOneRoom );

//add a new room to the db
router.post("/rooms",RoomControler.addOneRoom );

// update a list of room from the db
router.put('/rooms/:id', RoomControler.updateOneRoom );

//delete a rooms to the db
router.delete('/rooms/:id',RoomControler.deleteOneRoom  );

//affect room to host
router.put('/rooms/affect/:idroom/:idhost',RoomControler.affect)

// //affect room to host
router.delete('/rooms/desaffect/:idroom/:idhost',RoomControler.desaffect)

module.exports = router;