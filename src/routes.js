import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Orders from './Pages/Request';

function myRoutes() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pedidos' element={<Orders />} />
      </Routes>
    </Router>
  )
}

export default myRoutes