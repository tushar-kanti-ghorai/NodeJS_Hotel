const express=require('express');
const router=express.Router();
const MenuItem = require('./../models/Menu');


//POST route to add a menuItem
router.post('/',async(req,res)=>{
    try{
    const data=req.body//Assuming the request body contains the person data

    //create a new person document using the Moongoose model
    const newMenu=new MenuItem(data);

    //save the new person to the database
    const response=await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
    }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'})
    }
})


//GET method to get the Menu Items
router.get('/',async(req,res)=>{
    try{
  const data=await MenuItem.find();
  console.log('data fetched');
  res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})


//Get route to get person worktype
router.get('/:tasteType', async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;// // Extract the work type from the URL parameter
        if(tasteType=='sweet' || tasteType=='spicy'|| tasteType=='sour'){
            const response=await MenuItem.find({taste:tasteType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:"Invalid taste Type"});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})

    }
})
module.exports=router;