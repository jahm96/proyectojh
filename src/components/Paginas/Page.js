// import React from 'react'
// import {Routes, Route} from 'react-router-dom';
//   import { Inicio } from "../Inicio"
import {ItemListContainer} from "../ItemListContainer/ItemListContainer"
import {Navbar} from '../Navbar/Navbar'
  export default function Page () {
    return (
      <section>
          
              <div>
                <Navbar/>
                <ItemListContainer/>
              </div>       
          
      </section>
    )
  }