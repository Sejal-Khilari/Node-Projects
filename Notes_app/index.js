const express=require('express')
const app=express();
require('dotenv').config()

const Note=require('./models/Notes')
const noteRouter=require('./routes/Note')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("This is home page")
})

app.use('/notes',noteRouter);

const port=process.env.PORT ?? 3000
const dbconnection=require('./database/connect')

dbconnection.then(()=>{
    app.listen(port,()=>{
        console.log("http://localhost:"+port);
    })
}).catch((error)=>{
    console.log("Problem to connect with database "+error.message);
})

