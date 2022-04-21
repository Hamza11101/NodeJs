const Room = require('../models/Room.model')

exports.getAllRooms = async (req, res, next) => {
    try {
        let room = await Room.find().populate('OccupiedBy')
        res.send(room);
    } catch (error) {
        next();
    }
}

exports.getOneRoom = async (req, res, next) => {
    try {
        let room = await Room.findById(req.params.id)
        res.send(room);

    } catch (error) {
        next();
    }
}

exports.addOneRoom = async (req, res, next) => {

    try {
        const room = new Room({
            RoomNb: req.body.RoomNb,
            Size: req.body.Size,
            OccupiedBy: []
        })
        await room.save()

        // const user = await user.create(req.body)
        res.send(room)

    } catch (error) {
        next();

    }

}

exports.updateOneRoom = async (req, res, next) => {
    try {
        let room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(room)
    }
    catch (error) {
        next();
    }
}

exports.deleteOneRoom = async (req, res, next) => {
    try {
        let room = await Room.findByIdAndRemove(req.params.id);
        res.send(room);
    } catch (error) {
        next()
    }
}

exports.affect = async (req, res, next) => {
    try {
        const addRoomToHost = await Room.findByIdAndUpdate(
            req.params.idroom,
            { $push: { OccupiedBy: req.params.idhost } },
            { new: true }
        )
        res.send(addRoomToHost);

    } catch (error) {
        next()

    }
}

exports.desaffect = async (req, res, next) => {
    try {
        const upRoomInHost = await ToDo.findByIdAndUpdate(
            req.params.idroom,
            { $pull: { OccupiedBy: req.params.idhost } },
            { new: true }
        )
        res.send(upRoomInHost);

    } catch (error) {
        next()

    }
}  