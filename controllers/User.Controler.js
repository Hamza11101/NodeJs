const User = require('../models/User.model')

exports.getAllUsers = async (req, res, next) => {
    try {
        let user = await User.find().populate('todos')
        res.send(user);
    } catch (error) {
        next();
    }
}

exports.getOneUser = async (req, res, next) => {
    try {
        let user = await User.findById(req.params.id)
        res.send(user);

    } catch (error) {
        next();
    }
}

exports.addOneUser = async (req, res, next) => {

    try {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            todo: []
        })
        await user.save()

        // const user = await user.create(req.body)
        res.send(user)

    } catch (error) {
        next();

    }

}

exports.updateOneUser = async (req, res, next) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(user)
    }
    catch (error) {
        next();
    }
}

exports.deleteOneUser = async (req, res, next) => {
    try {
        let user = await User.findByIdAndRemove(req.params.id);
        res.send(user);
    } catch (error) {
        next()
    }
}

exports.affect = async (req, res, next) => {
    try {
        const addusertotodo = await User.findByIdAndUpdate(
            req.params.iduser,
            { $push: { todos: req.params.idtodo } },
            { new: true }
        )
        res.send(addusertotodo);

    } catch (error) {
        next()

    }
}

exports.desaffect = async (req, res, next) => {
    try {
        const addusertotodo = await ToDo.findByIdAndUpdate(
            req.params.iduser,
            { $pull: { todos: req.params.idtodo } },
            { new: true }
        )
        res.send(addusertotodo);

    } catch (error) {
        next()

    }
}    