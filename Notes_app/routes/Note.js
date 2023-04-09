const express=require('express')
const router=express.Router();

const Note=require('./../models/Notes')

const controller=require('../controller/Note')

router.get('/list/:userid',controller.getNotes);
router.post('/addNotes',controller.addNotes);
router.delete('/deletenotes/:id',controller.deleteNotes)



module.exports=router;