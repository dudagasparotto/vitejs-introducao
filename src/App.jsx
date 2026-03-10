import { Routes,Route } from 'react-router-dom'

import Home from './pags/home';
import Exemplo01 from './pags/exemplos/ex01';
import Exemplo02 from './pags/exemplos/ex02';

function App() {
 
  return (
    <div>
     <Routes>
     <Route path = '/' element = {<Home/>}/>
     <Route path = '/Exemplo/01' element = {<Exemplo01/>} />
     <Route path = '/Exemplo/02' element = {<Exemplo02/>} />
    </Routes>
    </div>
  )
}

export default App
