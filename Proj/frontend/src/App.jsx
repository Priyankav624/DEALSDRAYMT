import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from "./pages/Login"
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import EmployeeList from './pages/EmployeeList'
import EmployeeEdit from './pages/EmployeeEdit'
import CreateEmployee from './pages/CreateEmployee'

function App() {
    return (
        <>
          <Router>
            <Routes>
              <Route path='/' element={<Register />} />                  
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/createemployee' element={<CreateEmployee />} />
              <Route path='/employeelist' element={<EmployeeList />} />
              <Route path='/editemployee' element={<EmployeeEdit />} />
            </Routes>
          </Router>
        </>
    )
}

export default App
