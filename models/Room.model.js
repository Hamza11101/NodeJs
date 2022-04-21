const mongoose = require("mongoose")
const schema=mongoose.Schema;
 

const RoomSchema = new schema({
    RoomNb:{
        type:Number,
        required:[true,"Room Number is requires"]
    },
    Size:{
        type:String,
        required:[true,"description field is requires"]
    },

    OccupiedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'Host'}]
    
    },{
        versionKey:false,
       timestamps:true 
    }
    
    )


    const Room = mongoose.model('room',RoomSchema)

module.exports = Room;