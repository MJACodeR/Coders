const express = require('express');
const app = express();
const port = 3000;
const Router = require('./route/route');
const connectDB = require('./DB/connection')

app.use(express.json());
app.use(Router)
connectDB();
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

