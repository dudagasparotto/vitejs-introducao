import { Routes,Route } from 'react-router-dom'

import Home from './pags/home';
import Exemplo01 from './pags/exemplos/ex01';
import Exemplo02 from './pags/exemplos/ex02';
import Exemplo03 from './pags/exemplos/ex03';
import Atividade01 from './pags/atividades/atv01';

function App() {
 
  return (
    
     <Routes>
     <Route path = '/' element = {<Home/>}/>
     <Route path = '/Exemplo/01' element = {<Exemplo01/>} />
     <Route path = '/Exemplo/02' element = {<Exemplo02/>} />
     <Route path = '/Exemplo/03' element = {<Exemplo03/>} />
     <Route path = '/Atividade/01' element = {<Atividade01/>} />
    </Routes>
    
  )
}

export default App
