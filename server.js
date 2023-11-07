
const app = require('./app.js');        // here we requierd our Exprss server running on app.js 
require('dotenv').config                // to process the Envirment variables 

const PORT= process.env.PORT || 5000;   // This is our port and defaul PROT if the port is not availabe then we use that 

app.listen(PORT , () =>{                // Starting the Server on the Port 
  console.log(`server is running on : http://localhost:${PORT} `);  
})
