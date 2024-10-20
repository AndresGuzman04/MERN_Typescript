import React from 'react'
import {Task} from './Task'

interface Props {
    task: Task
}

const TaskItems = ({task}:Props) => {
  return (
    <div >
        <h2>{task.title}</h2>
        <p>{task.description}</p>  
      </div>
  )
}

export default TaskItems