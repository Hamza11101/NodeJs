const Phone = require('../models/Phone.model');

exports.getAllphones=async(req,res,next)=>{
    try {
let phone = await Phone.find().populate('Simha');
res.send(phone);

        
    } catch (error) {
      next()  
    }
}


exports.getOnePhone = async (req,res,next)=>{
    try {
        const phone = await Phone.findById(req.params.id);
        res.send(phone);
        
    } catch (error) {
        next();
        
    }
}

exports.addOnePhone = async(req,res,next)=>{
    try {
        const phone = new Phone({
            Model:req.body.Model,
            year_of_fabrication:req.body.year_of_fabrication,
            Call:req.body.req
        })
        await phone.save();
        res.send(phone)
        
    } catch (error) {
        next();
    }
}



exports.updateOnePhone = async (req,res,next)=>{
    try {const phone = await Phone.findByIdAndUpdate(req.params.id,req.body,{new: true});
        res.send(phone);
        
    } catch (error) {
        next()
    }
    
}

exports.deleteOnePhone = async (req,res,next)=>{
    try {
        const phone = await Phone.findByIdAndDelete(req.params.id);
        res.send(phone)
        
    } catch (error) {
        next();
        
    }
}


exports.affect = async (req,res,next)=>{
    try {
        const addSimtoPhone = await Phone.findByIdAndUpdate(req.params.idPhone,{$pull:{Simha:req.params.idSim}},{new:true})
        res.send(addSimtoPhone)
    } catch (error) {
        next()
    }
}

exports.dessaffect = async (req,res,next)=>{
    try {
        const removeSimtoPhone = await Phone.findByIdAndUpdate(req.params.idPhone,{$pull:{Simha:req.params.idSim}},{new:true})
        res.send(removeSimtoPhone)
    } catch (error) {
        next()
    }
}