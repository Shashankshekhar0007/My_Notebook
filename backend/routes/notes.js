const express = require('express');
const router = express.Router();
var fetchuser = require('../middlewares/fetchuser');
const { body, validationResult } = require('express-validator');
const Notes=require('../models/Notes');
// Route 1:  GET all the notes using: GET "/api/notes/fetchnotes". Login required
router.get('/fetchnotes', fetchuser,async (req, res) => {
   try{
      const notes=await Notes.find({user:req.user.id})
   res.json(notes);
   }catch(error) {
       console.error(error.message);
       res.status(500).send("Internal Server Error");
   }
})

// Route 2: Add a new note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser,[
      body('title', 'Enter a valid title').isLength({ min: 3 }),
      body('description', 'Description must be at least 5 characters').isLength({ min: 5 })],
       async (req, res) => {
       const errors= validationResult(req);
         if (!errors.isEmpty()) {
                  return res.status(400).json({ errors: errors.array().map(err => err.msg) });
               }
    try {
        const { title, description, tags } = req.body;
        const note = new Notes({
            title, description, tags, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: Update an existing note using: PUT "/api/notes/updatenote/:id". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tags } = req.body; 
    const newnote={};
    if(title){ newnote.title=title};
    if(description){ newnote.description=description};
    if(tags){ newnote.tags=tags};
    const note= await Notes.findById(req.params.id);
      if(!note){
         return res.status(404).send("Not Found");
      }
   if(note.user.toString()!== req.user.id){
         return res.status(401).send("Not Allowed");
      }
   try{
         const updatedNote = await Notes.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true });
         res.json({updatedNote});
   }catch(error) {
       console.error(error.message);
       res.status(500).send("Internal Server Error");
   }
});
// ROUTE 4: Delete an existing note using: PUT "/api/notes/deletenote/:id". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    const note= await Notes.findById(req.params.id);
      if(!note){
         return res.status(404).send("Not Found");
      }
   if(note.user.toString()!== req.user.id){
         return res.status(401).send("Not Allowed");
      }
   try{
         const deleteNote = await Notes.findByIdAndDelete(req.params.id);
         res.json({"Success":"Note has been deleted", note:note});
   }catch(error) {
       console.error(error.message);
       res.status(500).send("Internal Server Error");
   }
});
module.exports = router;