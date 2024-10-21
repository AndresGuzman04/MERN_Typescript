import React, { ChangeEvent, useState, useEffect} from 'react'
import {Task} from './Task'
import * as taskService from './TaskService'
import {toast} from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'


type InputChange =ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;


const TaskForm = () => {
  
  const history = useNavigate()
  const params = useParams()

  const initialState = {
    title:'', 
    description:''
  }
  const [task, setTask] = useState<Task>(initialState)

  const hanledInputChange = (e: InputChange)=>{
    setTask({...task,[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!params.id) {
      await taskService.createTask(task);
      toast.success('New task added')
      setTask(initialState)
    } else {
      await taskService.updateTask(params.id, task)
    }

    //Add and rediction
    history('/')
  }

  const getTask = async (id: string)=>{
    const res = await taskService.getTask_1(id);
    const {title, description} = res.data;
    setTask({title, description})
  }

  useEffect(() => {
    if (params.id) getTask(params.id);
  },[])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
                {
                  params.id ?(
                    <h3>Update Task</h3>
                ): (
                  <h3>New Task</h3>
                )}
            
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <input 
                  type="text" 
                  name='title' 
                  placeholder='Write a title for this task' 
                  className='form-control' 
                  onChange={hanledInputChange} 
                  value={task.title}
                  autoFocus/>
                </div>

              <div className="mb-3">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Write a description"
                  onChange={hanledInputChange}
                  value={task.description}
                  className="form-control"
                ></textarea>
              </div>

              <div className="mb-3">
                {
                  params.id ?(
                  <button className="btn btn-primary" disabled={!task.title || !task.description} >Update Task</button>
                ): (
                  <button className="btn btn-primary" disabled={!task.title || !task.description} >Create Task</button>
                )}
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm