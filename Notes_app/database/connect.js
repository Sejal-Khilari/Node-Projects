const mongoose=require('mongoose')
mongoose.set('strictQuery',true)

module.exports=mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})