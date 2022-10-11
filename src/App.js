import React from 'react'

import 'boxicons';
import {Routes, Route} from 'react-router-dom';
import Page from '../src/components/Paginas/Page';
import ErrorPage from './components/Paginas/ErrorPage';
import { Navbar } from './components/Navbar/Navbar';
import Inicio from '../src/components/Paginas/Inicio';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='*' element= {<ErrorPage/>}></Route>
      <Route path='/productos' element={<Page/>}></Route>
    </Routes>
    </>
  );
}

export default App;
