const Sim = require('../models/Sim.Model');



exports.getAllSims=async (req,res,next)=>{

    try {
        const sim = await Sim.find().populate('InPhone'); 
        res.send(sim)
    } catch (error) {
        next()
    }
    
}

exports.getOneSim = async (req,res,next )=>{
    try {
        const sim = await Sim.findById(req.params.id)
        res.send(sim)
    } catch (error) {
      next()  
    }
}


exports.addOneSim = async (req,res,next)=>{
try {
    const sim = new Sim ({
        Operateur:req.body.Operateur,
        Size:req.body.Size,
        InPhone:req.body.InPhone
    })
    await sim.save();
    res.send(sim)

} catch (error) {
    next()
    
}
}


exports.updateOneSim = async (req, res, next)=>{
    try {
        const sim = await Sim.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(sim);
        
    } catch (error) {
       next() ;
    }
}

exports.deleteOneSim =async (req,res,next)=>{
    try {
        const sim = await Sim.findByIdAndDelete(req.params.id);
        res.send(sim)
        
    } catch (error) {
        
    }
}


exports.affect = async (req,res,next)=>{
    try {const addPhonetoSim = await Sim.findByIdAndUpdate(req.params.idSim,{$pull:{InPhone:req.params.idPhone}},{new:true});

res.send(addPhonetoSim)
        
    } catch (error) {
      next();  
    }


}

exports.dessaffect = async (req,res,next)=>{
    try {const deletePhonetoSim = await Sim.findByIdAndUpdate(req.params.idSim,{$pull:{InPhone:req.params.idPhone}},{new:true});

res.send(deletePhonetoSim)
        
    } catch (error) {
      next();  
    }


}


