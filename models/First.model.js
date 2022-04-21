const mongoose = require("mongoose")
const schema=mongoose.Schema;

// create user schema & model 

const UserSchema = new schema({
    Message:{
        type:String,
        required:[true,"Message field is requires"]
    }
    
    
    },{
        versionKey:false,
        timestamps:true
    })


    const User = mongoose.model('user',UserSchema)

module.exports = User;