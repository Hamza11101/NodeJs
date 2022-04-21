const Host = require('../models/Host.model')

exports.getAllHosts = async (req, res, next) => {
    try {
        let host = await Host.find().populate('LiveIn')
        res.send(host);
    } catch (error) {
        next();
    }
}

exports.getOneHost = async (req, res, next) => {
    try {
        let host = await Host.findById(req.params.id)
        res.send(host);

    } catch (error) {
        next();
    }
}

exports.addOneHost = async (req, res, next) => {

    try {
        const host = new Host({
            FName: req.body.FName,
            LName: req.body.LName,
            OccupiedBy: []
        })
        await host.save()

        // const user = await user.create(req.body)
        res.send(host)

    } catch (error) {
        next();

    }

}

exports.updateOneHost = async (req, res, next) => {
    try {
        let host = await Host.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(host)
    }
    catch (error) {
        next();
    }
}

exports.deleteOneHost = async (req, res, next) => {
    try {
        let host = await Host.findByIdAndRemove(req.params.id);
        res.send(host);
    } catch (error) {
        next()
    }
}

exports.affect = async (req, res, next) => {
    try {
        const addHostToRoom = await Host.findByIdAndUpdate(
            req.params.idhost,
            { $push: { LiveIn: req.params.idroom } },
            { new: true }
        )
        res.send(addHostToRoom);

    } catch (error) {
        next()

    }
}

exports.desaffect = async (req, res, next) => {
    try {
        const upHostInRoom = await ToDo.findByIdAndUpdate(
            req.params.idhost,
            { $pull: { LiveIn: req.params.idroom } },
            { new: true }
        )
        res.send(upHostInRoom);

    } catch (error) {
        next()

    }
}  