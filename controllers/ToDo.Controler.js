const ToDo = require('../models/Todo.model')

exports.showAllTab = async (req, res, next) => {
    try {
        let todo = await ToDo.find().populate('postedBy')
        res.send(todo);
    } catch (error) {
        next();
    }
}

exports.showOneTab = async (req, res, next) => {
    try {
        let todo = await ToDo.findById(req.params.id)
        res.send(todo);

    } catch (error) {
        next();
    }
}


exports.addNewToDo = async (req, res, next) => {
    try {
        const todo = new ToDo({
            name: req.body.name,
            description: req.body.description,
            postedBy: req.body.postedBy

        })
        await todo.save()
        res.send(todo)

    } catch (error) {
        next();
    }
}

exports.updateToDo = async (req, res, next) => {
    try {
        let todo = await ToDo.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.send(todo)
    }
    catch (error) {
        next();
    }
}

exports.deleteToDo = async (req, res, next) => {
    try {
        let todo = await ToDo.findByIdAndRemove({ _id: req.params.id });
        res.send(todo);
    } catch (error) {
        next()
    }
}