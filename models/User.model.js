const mongoose = require('mongoose');
const schema = mongoose.Schema;
// const ToDo = mongoose.model('todo')
//create user schema

const UserSchema = new schema({
    // (firstName, lastName, email, password, ageet todos (tableau) en mettant Useret Todo

    firstName: {
        type: String,
        required: [true, "firstName field is requires"]
    },
    lastName: {
        type: String,
        required: [true, "lastName field is requires"]
    },
    email: {
        type: String,
        required: [true, "email field is requires"]
    },
    password: {
        type: String,
        required: [true, "password field is requires"]
    },

   todos : [ {type: mongoose.Schema.Types.ObjectId, ref: 'todo'} ]
}, {
    versionKey: false,
    timestamps: true
}

) 


const User = mongoose.model('User',UserSchema)

module.exports = User;