import React from 'react'
import NavigationBar from './COMPONENTS/NavigationBar'
import Header from './COMPONENTS/Header'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CategoryDishes from './COMPONENTS/CategoryDishes'
import CategoryDetails from './COMPONENTS/CategoryDetails'

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Header />
        <div className='divider' />
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