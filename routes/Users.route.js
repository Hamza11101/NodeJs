// const { query } = require('express');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/User.Controler')

// get a list of users from the db
router.get('/users', userController.getAllUsers);


// get one user by id
router.get('/users/:id', userController.getOneUser );

//add a new user to the db
router.post("/users", userController.addOneUser );

// update a list of todo from the db
router.put('/users/:id',userController.updateOneUser );

//delete a users to the db
router.delete('/users/:id', userController.deleteOneUser );

//affect user to todo
router.put('/users/affect/:idtodo/:iduser',userController.affect)

//affect user to todo
router.delete('/users/desaffect/:idtodo/:iduser',userController.desaffect)

module.exports = router;