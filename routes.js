import express from 'express'
const router = express.Router();
import TimeTable from './models.js'

router.get('/gdsc', async (req, res) => {
    try {
      const subscribers = await TimeTable.find({id:req.query.id})
    //   console.log(subscribers[0].tt[0][1])
      res.json(subscribers[0].tt[req.query.day])
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
// In futher updates We will give the option to upload as well
//   router.post('/pk', async (req, res) => {
//     const timetable = new TimeTable({
//             id: "19ECEB",
//             tt:[["MEP","DCS","DSP","ELE-A","DSDV","DSDV TUT", "TUT"],["5B1 DSP LAB/ 5B2 HDL LAB","5B1 DSP LAB/ 5B2 HDL LAB","5B1 DSP LAB/ 5B2 HDL LAB","ELE-B","DSP","DSP TUT","TUT"],["DSP","DCS","MEP","ELE-A","5B2-DSP LAB / 5B3 HDL LAB","5B2-DSP LAB / 5B3 HDL LAB","5B2-DSP LAB / 5B3 HDL LAB"],["DCS","DSDV","ET","ELE-B","MEP","MEP TUT"],["DSDV","DSP","ET","ELE-B","5B3 DSP LAB/ 5B1 HDL LAB","5B3 DSP LAB/ 5B1 HDL LAB","5B3 DSP LAB/ 5B1 HDL LAB"],["ELE-A","DCS","DCS TUT"]]
//     })
//     try {
//       const newSubscriber = await timetable.save()
//       res.status(201).json(newSubscriber)
//       res.send("done")
//     } catch (err) {
//       res.status(400).json({ message: err.message })
//     }
//   })
    

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