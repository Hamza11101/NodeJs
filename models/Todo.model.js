const mongoose = require("mongoose")
const schema=mongoose.Schema;
// const User = mongoose.model('user')
// create todo schema & model 

const ToDoSchema = new schema({
    name:{
        type:String,
        required:[true,"name field is requires"]
    },
    description:{
        type:String,
        required:[true,"description field is requires"]
    },

    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    
    },{
        versionKey:false,
       timestamps:true 
    }
    
    )


    const ToDo = mongoose.model('todo',ToDoSchema)

module.exports = ToDo;