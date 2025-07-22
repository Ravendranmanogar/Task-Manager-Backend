const Task = require('../models/Task')
const getAllTasks = async(req,res) => {
    try{
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    } 
    catch(err){
        res.status(500).json({msg:err})
    }
    
}
const getTask = (req,res) => {
    res.json({id:req.params.id})
}
const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)    
        res.status(201).json({task})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
    
}
const updateTasks = (req,res) => {
    res.send("update task")
}
const deleteTasks = (req,res) => {
    res.send("delete task")
}

module.exports = {getAllTasks,getTask,createTask,updateTasks,deleteTasks}