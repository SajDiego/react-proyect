import {useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './components/Detail/Detail'
import Navbar from './components/Navbar/Navbar'


function App () {

  return(
    <>
  

     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:idProduct' element={<Detail/>}/>
  
     </Routes>
     </BrowserRouter>

  
    </>
    )
}
export default App;
