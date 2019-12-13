import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './components/Header'
import Inversiones from './components/Inversiones'
import Formulario from './components/Formulario'

const App = () => {

  const [inversion, setInversion] = useState([])

  const consultarAPI = async () => {
      const url = `http://localhost:4000/inversiones`

      const response = await fetch(url)
      const data = await response.json()
      // console.log("TCL: consultarAPI -> data", data)
      setInversion(data.result)
  }

  useEffect(() => {
      consultarAPI();
  }, [])

  const updateInversion = (data) => {
    // console.log(data);
    setInversion(
     [...inversion, data]
    )
  }


  return (
    <Router>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Inversiones inversion={inversion}/>
          </Route>
          <Route path="/inversion">
            <Formulario updateInversion={updateInversion}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
