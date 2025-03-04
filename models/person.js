const mongoose=require("mongoose");
const bcrypt=require('bcrypt');

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
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  

})


personSchema.pre('save', async function(next){
    const person=this;

    //Hash the password only if it has been modified (or is now)
    if(!person.isModified('password')) return next();

    try{
        //hash password generation
        const salt=await bcrypt.genSalt(10); 

        //hash password
        const hashpassword =await bcrypt.hash(person.password,salt);

        //override the plain password with the hashed one
        person.password=hashpassword;
        next();
    }catch(err){
        return next(err)
    }
})

personSchema.methods.comparePassword=async function(candidatePassword){
    try{
        //use bcrypt to compare the provided with the hashed password
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        /*how to work compare
       (password_main) prince->bdbedfgsjyhb8bb93ib890dbbh
        login-> agarwak(wrong_password)
        bdbedfgsjyhb8bb93ib890dbbh->extract salt
        salt+agar->hash->swrsygfs83yvshwt6wg8gs(compare ->return false) */
        return isMatch 

    }catch(err){
     throw err;
    }
}

//create person model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;