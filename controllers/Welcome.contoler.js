
exports.welcome =  async (req, res, next) => {
    try {
        // let users = await User.find()
        res.send({message: 'Hello World !!'});

    } catch (error) {
        next();
    }

}