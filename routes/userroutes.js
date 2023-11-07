// for routing we require express
const express = require("express");

// controllers me logic write karte hai , jo kit request karta hai database server se phir  response aata return karta hai

// we are doing destruturing for Storing all the Routes creted in controller 

const {home,createUser,getUsers, deleteUser,editUser,} =require("../controllers/controll.js");
const router = express.Router();
// you can say it is path or route for the navigation for user

router.get("/", home);                             //getting infromation 
router.post("/createuser", createUser);            // sending request to database server
router.get("/getusers", getUsers);
router.delete("/deleteuser/:Id", deleteUser);       // Mdifying the database server with the delete router
router.put("/edituser/:Id", editUser);


module.exports = router;                          // module exports 
