const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

//POST route to add a person
router.post('/',async(req,res)=>{
    try{
    const data=req.body//Assuming the request body contains the person data

    //create a new person document using the Moongoose model
    const newPerson=new Person(data);

    //save the new person to the database
    const response=await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'})
    }
})



//GET method to get the person
router.get('/',async(req,res)=>{
    try{
  const data=await Person.find();
  console.log('data fetched');
  res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})


//Get route to get person worktype
router.get('/:workType', async(req,res)=>{
    try{
        const workType=req.params.workType;// // Extract the work type from the URL parameter
        if(workType=='chief' || workType=='manager'|| workType=='waiter'){
            const response=await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:"Invalid work Type"});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})

    }
})

module.exports=router