import { Routes,Route } from 'react-router-dom'


import Home from './pags/home';
import Sobre from './pags/sobre';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 
  return (
    <div>
     <Routes>
     <Route path = '/' element = {<Home/>}/>
     <Route path = '/Sobre' element = {<Sobre/>} />
    </Routes>
    </div>
  )
}

export default App
