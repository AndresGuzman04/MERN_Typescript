import { RequestHandler } from "express";
import Task from './Task'

export const createTask: RequestHandler = async (req, res) => {
   const task = new Task(req.body)
   const savedTask = await task.save()
   res.status(201).json(savedTask)
} 

export const getTasks: RequestHandler = async (req, res) => {
    try {
        const tasks = await Task.find()
    res.json(tasks);
    } catch (error) {
        res.json(error)
    }
} 

export const getTask: RequestHandler = async (req, res) => {
    
    try {
        const taskFound = await Task.findById(req.params.id);
    res.json(taskFound)
    } catch (error) {
        res.status(204).json();
    }
} 

export const deleteTask: RequestHandler = async (req, res) => {
    try {
        const taskFound = await Task.findByIdAndDelete(req.params.id);
    res.json(taskFound)
    } catch (error) {
        res.status(204).json();
    }
} 

export const updateTask: RequestHandler = (req, res) => {
    res.json('getting task')
} 