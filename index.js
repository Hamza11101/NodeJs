const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// set up express app 
const app = express();
 
app.use(cors());
app.use(morgan('dev'));

//-*-
app.use(express.json());

// // connect to mongodb
require('./db/connect');

//initialize routes
app.use('/api/v1',require('./routes/welcome.api'))
app.use('/api/v1',require('./routes/ToDo.route'))
app.use('/api/v1',require('./routes/Users.route'))
app.use('/api/v1',require('./routes/Room.route'))
app.use('/api/v1',require('./routes/Host.route'))
app.use('/api/v1',require('./routes/Phone.route'))
app.use('/api/v1',require('./routes/Sim.route'))

//error handling middelware
app.use((err,req,res,next)=>{
    
    res.status(422).send({error:err.message})
});
// require('dotenv').config()
// console.log(process.env)

// listen for requests
app.listen(process.env.port || 2000,function(){
    console.log('now listening for requests');
})