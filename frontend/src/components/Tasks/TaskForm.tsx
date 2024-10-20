import React from 'react'

const TaskForm = () => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Task</h3>
            <form action="" method="post">

              <div className="mb-3">
              <input type="text" name='title' placeholder='Write a title for this task' className='form-control' autoFocus/>
              </div>

              <div className="mb-3">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Write a description"
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