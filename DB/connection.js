const mongoose = require('mongoose');
mongoose.set("strictQuery",true)

const connectDB  = () => mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log(`MongoDB Connected`)
}).catch((error)=>{
    console.log(error);
})

module.exports=connectDB;