const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PhoneSchema = new schema({
    Model: {
        type: String,
    },
    year_of_fabrication: {
        type: String
    },
    Simha:{type: mongoose.Schema.Types.ObjectId, ref: 'sim'}

},{
    versionKey:false,
   timestamps:true 
})

const Phones = mongoose.model('phone',PhoneSchema)

module.exports = Phones 



