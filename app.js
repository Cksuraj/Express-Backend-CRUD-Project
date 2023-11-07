// dotenv is envirnoment where we set our fixed values

require('dotenv').config();
const express =require('express');
const cors = require('cors')
const app=express();
// Express middleware ?  It used to chek point for data  CURD oprations

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// database connection jo ki config files se kiya hai 
const connectdb = require('./config/db.js')
// init connection to db
// callback(); for database
connectdb();
// how we will call routes here syntax
// yaha app se userroutes ko access karne ka syntax 
const userRoutes=require('./routes/userroutes.js')

app.use('/',userRoutes);
// last mai exports 

module.exports =app;

