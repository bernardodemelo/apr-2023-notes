// Backend --> To import Packages, we use require.
// React --> To import Packages, we use import. 

const router = require('express').Router();

const mongoose = require('mongoose');

// Require Data Models
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

// POST /api/projects ROUTE that Creates a new project

router.post('/projects', async (req,res)=>{
    const {title, description} = req.body;

    try{
        // We wait until we have the status of the creation of Project to make the next step
        let response = await Project.create({title, description, tasks: []});
        // Send the response as a json file, because we're making an API
        res.json(response);
    }
    catch(error){
        res.json(error);
    }


});

// GET /api/projects ROUTE that Lists the Projects
router.get('/projects', async(req,res)=>{
    try{
        let allProjects = await Project.find().populate('tasks');
        res.json(allProjects);
    }
    catch(error){
        res.json(error);
    }
});

// GET /api/projects/:projectId to display specific info of a Project
router.get('/projects/:projectId', async (req,res)=>{
    const {projectId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(projectId)){
        // status of 2xx is successful.
        // error with 4xx is client-side.
        // error with 5xx is server-side 
        res.status(400).json({message: 'Specified id is not valid'});
        return;
    }

    try{
        let foundProject = await Project.findById(projectId)
        .populate('tasks');
        res.status(200).json(foundProject);
    }
    catch(error){
        res.json(error);
    }
});

// PUT /api/projects/:projectId to update info of a Project

router.put('/projects/:projectId', async (req, res)=>{
    const {projectId} = req.params;
    const {title, description} = req.body;

    if(!mongoose.Types.ObjectId.isValid(projectId)){
       res.status(400).json({message: 'Specified Id is not valid'}); 
       return; 
    }

    try{
        let updatedProject = await Project.findByIdAndUpdate(projectId, 
        {title, description}, {new: true});
        res.json(updatedProject);
    }
    catch(error){
        res.json(error);
    }
});

router.delete('/projects/:projectId', async(req,res)=>{
    const {projectId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(projectId)){
        res.status(400).json({message: 'Specified Id is not valid'}); 
        return; 
    }

    try{
        await Project.findByIdAndRemove(projectId);
        res.json({message: `Project with ${projectId} is removed.`})
    }
    catch(error){
        res.json(error);
    }
});

module.exports = router; 


