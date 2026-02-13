import express from 'express'
import cors from 'cors'

const router=express.Router();

router.get('/',(req,res)=>{
    res.send('whatsapp route is working');
})

export default router;