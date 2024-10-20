import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar ">
        <div className="container">
          <Link className="navbar-brand" to="/">My Tasks</Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/new-task">Create New Task</Link>
              </li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar