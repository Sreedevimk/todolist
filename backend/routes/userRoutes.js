const express=require("express")
const router=express.Router();
const jwt=require("jsonwebtoken")
require('../db/connection');
const todoModel = require("../model/todoData");
router.use(express.json())

// router.get('/todo',async(req,res)=>{
//     const user=await todoModel
// })
router.get('/',async(req,res)=>{
    try {
        const data=await todoModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send('data not found')
    }
})




router.post('/todo',async(req,res)=>{
    const user=await todoModel.findOne({todolist:req.body.todolist
        
    })
    if(!user){
        res.json({message:"data not found"})
    }
    // try{
    //     if 
    // }
    // catch(error){
    //     console.log(error)
    // }
})
module.exports=router





