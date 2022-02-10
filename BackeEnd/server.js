const express=require('express')
const app = express();
const morgan = require('morgan')
var dotenv = require('dotenv')
var config = require('../config.json');
let bodyParser = require('body-parser');
const mongoose = require('mongoose')
const mongodb = require('../dbconnection')

dotenv.config();
var ports = config.PORTS
app.use(morgan('tiny'))

mongoose.Promise = global.Promise
mongoose.connect(config.Database.MONGODB_URI,{
    useNewUrlParser : true,
    
})
.then(() =>{
  console.log('mongodb connected',)
  console.log('Connected to MongoDB ', mongodb);
})
.catch(err => {
  console.log('mongo error in connection:', err)

});




app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


// app.get('/',(req,res)=>{
//   res.send('crud')
// })

app.use('/',require('./routes/routes'))
app.listen(ports,() => {
    console.log(`Server running on http://localhost:${ports}`);
   })


