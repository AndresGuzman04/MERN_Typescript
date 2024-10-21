import React, { useEffect, useState } from 'react'
import {Task} from "./Task"
import * as taskService from './TaskService'
import TaskItems from './TaskItems'


const TaskList = () => {

    const [tasks, setTasks] = useState<Task[]>([])

    const loadTasks = async () => {
        const res = await taskService.getTask()
        
        const formatedTask = res.data.map((task) =>{
          return {
            ...task,
            createAt: task.createdAt ? new Date(task.createdAt): new Date(),
            updateAt: task.updatedAt ? new Date(task.updatedAt): new Date(),
          }
        })

        .sort((a,b) => b.createAt.getTime() - a.createAt.getTime());

        setTasks(formatedTask);
    }

    useEffect(() => {
      loadTasks()
    }, [])
    

  return (
    <div className='row'>
      {tasks.map((task) => { 
        return <TaskItems key={task._id} task={task} loadTasks = {loadTasks}/>
      })}
    </div>
  )
}

export default TaskList