import { useState } from 'react'

import Home from './pages/home';
import Sobre from './pages/sobre';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <div>
     <Routers>
     <Route path = '/' element = {<Home/>}/>
     <Route path = '/Sobre' element = {<Sobre/>} />
    </Routers>
    </div>
  )
}

export default App
