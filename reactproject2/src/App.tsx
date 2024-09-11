import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './libBiz/Home';
//import TablePage from './TablePage';
import Addform from './libBiz/Addform';

import { sleep, echo } from './lib/bsc';
function App() {

  
  const [count, setCount] = useState(0)

  return (
    <>
      
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  
                  <Route path="/addform" element={<Addform />} />
              </Routes>
          </Router>
     
    </>
  )
}

export default App
