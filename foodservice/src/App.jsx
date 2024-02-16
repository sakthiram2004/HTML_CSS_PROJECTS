
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Open from './open'
import Login from './login'
function App() {
 
  return (
    <>
     
     <Routes>
      <Route path="/" element={<Open/>}></Route>
      <Route 
       path='login' element={<Login/>}></Route>
     </Routes>
    </>
  )
}

export default App
