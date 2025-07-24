const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const getAllTasks = asyncWrapper( async(req,res) => {
    //try{
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    //} 
    //catch(err){
    //    res.status(500).json({msg:err})
    //}
    
})
const getTask = asyncWrapper( async (req,res) => {
    //res.json({id:req.params.id})
    
        const{id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!Task){
            return res.status(404).json({msg:`No Task with this ID: ${taskID}`})
        }
        res.status(200).json({task})
        
})
const createTask = asyncWrapper( async (req,res) => {
        const task = await Task.create(req.body)    
        res.status(201).json({task})   
})
const updateTasks = asyncWrapper( async(req,res) => {
    
        const{id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new : true, runValidators:true})
        if(!Task){
            return res.status(404).json({msg:`No Task with this ID: ${taskID}`})
        }
        res.status(200).json({task})
    
})
// const editTask = async(req,res) => {
//     try{
//         const{id:taskID} = req.params
//         const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new : true, runValidators:true,overwrite:true})
//         if(!Task){
//             return res.status(404).json({msg:`No Task with this ID: ${taskID}`})
//         }
//         res.status(200).json({task})
//     }
//     catch(error){
//         res.status(500).json({msg: error})
//     }
// }
const deleteTasks = asyncWrapper( async(req,res) => {
    
        const{id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!Task){
            return res.status(404).json({msg:`No Task with this ID: ${taskID}`})
        }
        res.status(200).json({task})
    
})

module.exports = {getAllTasks,getTask,createTask,updateTasks,deleteTasks}