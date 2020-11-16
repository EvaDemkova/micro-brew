import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Homepage from './Homepage/Homepage'
import MainApp from './MainApp'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='*'>
          <MainApp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
