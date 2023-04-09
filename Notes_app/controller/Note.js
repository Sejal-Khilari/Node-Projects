const Note=require('../models/Notes')


const controller={
    async getNotes(req,res,next){
        try{
            const notes=await Note.find({userid:req.params.userid});
            if(!notes){
                return res.status(400).send();
            }
            // res.send(notes);
            res.json(notes);
        }catch(err){
            res.status(400).send();
        }
    },
    async addNotes(req,res,next){
        await Note.deleteOne({id:req.body.id});

        const {id,userid,title,content}=req.body;
        const newNotes=await Note.create(req.body);
        // res.send(newNotes);
        await newNotes.save()
        const response={message:"New Note created "+`id: ${req.body.id}`};
        res.json(response)
    },
    async deleteNotes(req,res,next){
        try{
            const delnote=await Note.deleteOne({id:req.params.id});
            if(!delnote){
                return res.status(404).send();
            }
          
            const response={message:"Note Deleted! "+`id: ${req.body.id}`};
            res.json(response)
        }catch{
            res.status(500).send();
        }
     
    
    }
};

module.exports=controller;