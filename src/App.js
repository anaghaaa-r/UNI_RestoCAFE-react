import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CategoryDishes from './COMPONENTS/CategoryDishes'

function App() {
  return (
    <div>
      <Router>
        <main className='py-3'>
          <Routes>
            <Route path='/:id' element={<CategoryDishes />} />
            <Route path='*' element={<Navigate to="/11" />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App