import express from 'express'
import router from './routes.js'
import mongoose from 'mongoose'
import cors from 'cors'
const app=express()
const PORT=5000;
mongoose.connect("mongodb+srv://GDSC:Pratik2902@cluster0.vsofg.mongodb.net/timetable?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(cors());
app.use("/", router);
db.connection
app.listen(PORT|| process.env.PORT,()=>console.log("running on " + PORT));
