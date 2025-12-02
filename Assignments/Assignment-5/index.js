const express = require('express');
const mongoose = require('mongoose');
const app = express();
//mongodb+srv://sowntharya:Sownd1234@cluster0.nv83qn9.mongodb.net/?appName=Cluster0
// Middleware
app.use(express.json());

// Routes
const Router = require("./route/userRoutes");
app.use("/user", Router);

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/sampleUser")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.log("Error connecting to MongoDB", err));

// Server Start
const PORT = 8000;
app.get('/get-User',(req,res)=>{
     res.send("This is from GET-user")
})
app.post('/create-User',(req,res)=>{
     res.send("This is from CREATE-user")
})
app.put('/update-User',(req,res)=>{
     res.send("This is from UPDATE-user")
})
app.delete('/delete-User',(req,res)=>{
     res.send("This is from DELETE-user")
})
app.listen(PORT, () => {
    console.log(`Server is online at http://localhost:${PORT}`);
});





























































// const express=require('express')
// const app=express();
// app.use(express.json());
// const router=require("../ServerNew/route/userRoutes");
// app.use("/user",router);

// const PORT=8000;
// mongoose.connect("mongodb://localhost:27017/sampleUser")
// .then(()=>{
//     console.log("connected to MongoDB")
// })
// .catch((err)=>console.log("Error connecting to MongoDB",err))

// app.listen((PORT),()=>{
//     console.log(`Server is online at http://localhost:${PORT}`);
// })
// app.get('/get-user',(req,res)=>{
//      res.send("This is from GET-user")
// })
// app.post('/create-user',(req,res)=>{
//      res.send("This is from CREATE-user")
// })
// app.put('/update-user',(req,res)=>{
//      res.send("This is from UPDATE-user")
// })
// app.delete('/delete-user',(req,res)=>{
//      res.send("This is from DELETE-user")
// })





