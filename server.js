const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();


const bodyPerser=require('body-parser');
//Import the router file
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use(bodyPerser.json());//it stores the data in req.body
const PORT=process.env.PORT || 3000





//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);



