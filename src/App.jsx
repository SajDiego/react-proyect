import {useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './components/Detail/Detail'


function App () {

  return(
    <>
     <Navbar/>
     <ItemListContainer/>
     <Detail ProductId={10}/>
    </>
    )
}
export default App;
