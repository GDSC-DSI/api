import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';
const app=express()
const PORT=5000;
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());
app.get('/three',(req,res)=>{
    console.log("3");
    res.send("three objects");
   
});
app.get('/four',(req,res)=>{
    console.log("4");
    res.send("four objects");
});
app.get('',(req,res)=>{
    console.log("homepage");
    res.send("welcome to GDSC APP");
 
});

app.listen(PORT,()=>console.log("running"));
