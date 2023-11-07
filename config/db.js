// 1st step mongoose require('mongoose')
const mongoose=require('mongoose')

// estabilishing database connection useing async await
const connectdb = async () => {
mongoose.connect(process.env.MONGO_URI)                        
.then((conn) =>{
    console.log(`connected to DB: ${conn.connection.host}`);              // connecting to the database 
})
.catch((err) =>{
    console.log(err.message);
    process.exit(1); 
})
}

// Module Export
module.exports=connectdb;

