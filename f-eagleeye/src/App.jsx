// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import {  Route, Routes } from 'react-router-dom'
import Body1 from './components/Navigation/Body1'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
     
        <Routes>

          <Route path='/navigate/:id' element={<>
            <Navbar />
            <Body1 />
            {/* <Footer /> */}
          </>} />

          <Route path='/' element={<>
            <Navbar />
            <Body />
            {/* <Footer /> */}
          </>} />
        </Routes>
     

    </div>
  )
}

export default App
