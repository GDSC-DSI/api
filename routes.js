import express from 'express'
const router = express.Router();
import TimeTable from './models.js'

router.get('/pk', async (req, res) => {
    try {
      const subscribers = await TimeTable.find({id:req.query.id})
      console.log(subscribers[0].tt[0][1])
      res.json(subscribers[0])
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
 
  router.post('/pk', async (req, res) => {
    const timetable = new TimeTable({
            id: "19ECEB",
            tt:[[""],[]]
    })
    try {
      const newSubscriber = await timetable.save()
      res.status(201).json(newSubscriber)
      res.send("done")
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
    

router.get('/three',(req,res)=>{
    console.log("3");
    res.send("three objects");
   
});
router.get('/four',(req,res)=>{
    console.log("4");
    res.send("four objects");
});
router.get('/',(req,res)=>{
    console.log("homepage");
    res.send("welcome to GDSC APP");
 
});

 export default router;