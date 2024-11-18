import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './components/calendar'
import Navbar from './components/nav'


function App() {
  

  return (
    <>
      <main className='main'>
        <Navbar></Navbar>
        <Calendar></Calendar>
      </main>
    </>
  )
}

export default App
