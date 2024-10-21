import React from 'react'
import {Task} from './Task'
import {useNavigate} from 'react-router-dom'
import './taskItem.css'
import * as taskService from './TaskService'
interface Props {
    task: Task
    loadTasks: () => void;
}

const TaskItems = ({task, loadTasks}:Props) => {
  const history = useNavigate()

  const handletDelete = async (id: string) =>{
    await taskService.deleteTask(id)
    loadTasks();
  }

  return (
    <div className='col-md-4'>
         <div className="card card-body task-card">
          <div className="d-flex justify-content-between">
            <h1 onClick={()=> history(`/update/${task._id}`)}>{task.title}</h1>
            <span className='text-danger'onClick={()=> task._id && handletDelete(task._id)}>X</span> 
          </div>
          <p>{task.description}</p>
         </div>
    </div>

  )
}

export default TaskItems