const mongoose=require("mongoose");

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },

    work:{
     type:String,
     enum:['chief','waiter','manager'],//It will take these three inputs and not other inputs
     required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,//incoming input should be unique
        required:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }

})

//create person model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;