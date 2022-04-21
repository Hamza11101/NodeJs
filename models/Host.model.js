const mongoose = require("mongoose")
const schema=mongoose.Schema;



const HostSchema = new schema({
    FName:{
        type:String,
        required:[true,"name field is requires"]
    },
    LName:{
        type:String,
        required:[true,"description field is requires"]
    },

    LiveIn:[{type: mongoose.Schema.Types.ObjectId, ref: 'room'}] 
    
    },{
        versionKey:false,
       timestamps:true 
    }
    
    )


    const Host = mongoose.model('Host',HostSchema)

module.exports = Host;