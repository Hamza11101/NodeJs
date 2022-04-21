const { Module } = require('module');
const mongoose = require('mongoose');
const schema = mongoose.Schema;


const SimSchema = new schema( {
    Operateur :{type:String},

    Size : {type:String},

    InPhone:{type: mongoose.Schema.Types.ObjectId, ref: 'phone'}



},{
    versionKey:false,
    timestamps:true
}
)

const Sim = mongoose.model('sim',SimSchema);

module.exports = Sim;
