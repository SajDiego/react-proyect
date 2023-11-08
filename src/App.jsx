import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App () {

  const greeting = "Bienvenidos a Mundo PC"

  return(
    <>
     <Navbar/>
     <ItemListContainer propiedades={greeting}/>
    </>
  )
}
export default App
