const express = require('express'); 
const conectarDB = require('./config/db'); 
const cors = require("cors"); 

const app = express(); 

conectarDB(); 

app.use(cors())

app.use(express.json()); 

app.use('/api/pokemon', require('./routes/pokemon')); 

app.listen(4001, ()=>{
    console.log("EL SERVIDOR ESTA CORRIENDO PERFECTAMENTE"); 
})