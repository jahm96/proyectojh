import React from 'react'

import 'boxicons';
import {Routes, Route} from 'react-router-dom';
import Page from '../src/components/Paginas/Page';


function App() {
  return (
    <Routes>
      <Route path='/gay' element={<Page/>}></Route>
    </Routes>
  );
}

export default App;
