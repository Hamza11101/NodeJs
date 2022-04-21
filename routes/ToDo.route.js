// const { query } = require('express');
const express = require('express');
const router = express.Router();
const ToDoController = require('../controllers/ToDo.Controler');
// get a list of ToDo from the db
router.get('/todo', ToDoController.showAllTab );

// get one to do by id
router.get('/todo/:id', ToDoController.showOneTab ); 

//add a new todo to the db
router.post("/todo",ToDoController.addNewToDo );

// update a list of todo from the db
router.put('/todo/:id', ToDoController.updateToDo);


//delete a  users to the db
router.delete('/todo/:id', ToDoController.deleteToDo );


module.exports = router;