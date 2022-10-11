import React from 'react'
import {Switch, Router} from "react-router-dom";
import { Inicio } from "../Inicio"
import {ItemListContainer} from "../ItemListContainer/ItemListContainer"
export default function Page () {
  return (
    <section>
        <Switch>
            <Router path="/" exact component={Inicio}/>
            <Router path="productos" exact component={ItemListContainer}/>        
        </Switch>
    </section>
  )
}

