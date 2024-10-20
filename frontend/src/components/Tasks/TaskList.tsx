import React, { useEffect, useState } from 'react'
import {Task} from "./Task"
import * as taskService from './TaskService'
import TaskItems from './TaskItems'


const TaskList = () => {

    const [tasks, setTasks] = useState<Task[]>([])

    const loadTasks = async () => {
        const res = await taskService.getTask()
        setTasks(res.data);
    }

    useEffect(() => {
      loadTasks()
    }, [])
    

  return (
    <div>
      {tasks.map((task) => { 
        return <TaskItems key={task._id} task={task}/>
      })}
    </div>
  )
}

export default TaskList