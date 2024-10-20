import React, { ChangeEvent, useState } from 'react'
import {Task} from './Task'
import * as taskService from './TaskService'

type InputChange =ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TaskForm = () => {

  const [task, setTask] = useState<Task>({title:'', description:''})

  const hanledInputChange = (e: InputChange)=>{
    setTask({...task,[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await taskService.createTask(task);
    console.log(res)
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Task</h3>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <input 
                  type="text" 
                  name='title' 
                  placeholder='Write a title for this task' 
                  className='form-control' 
                  onChange={hanledInputChange} 
                  autoFocus/>
                </div>

              <div className="mb-3">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Write a description"
                  onChange={hanledInputChange}
                  className="form-control"
                ></textarea>
              </div>

              <div className="mb-3">
              <button className="btn btn-primary">
                  Create Task
              </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm