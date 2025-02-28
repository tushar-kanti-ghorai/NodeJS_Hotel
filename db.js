const { default: mongoose } = require("mongoose");
require('dotenv').config();

//Define the MONgoDB connection URL
const mongoURL=process.env.MONGODB_URL//Replace 'mydatabase' with your database name

//Set up MongoDB connection
mongoose.connect(mongoURL)

//Get the default connection
//Moongoose mintains a default connection object representing the MongoDB connection
const db=mongoose.connection;

//Define event listener for database connection handling
//like connected,disconnected,error

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
    // setTimeout(() => {
    //     mongoose.disconnect();
    // }, 5000);
})

db.on('error',()=>{
    console.log('MongoDB connection error');
 
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

//Export  the database connection
module.exports=db;
