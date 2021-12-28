import express from 'express'
const router = express.Router();
import bodyParser from 'body-parser'
import {mongoose} from "mongoose"

router.get('/three',(req,res)=>{
    console.log("3");
    res.send("three objects");
   
});
router.get('/four',(req,res)=>{
    console.log("4");
    res.send("four objects");
});
router.get('',(req,res)=>{
    console.log("homepage");
    res.send("welcome to GDSC APP");
 
});

 export default router;