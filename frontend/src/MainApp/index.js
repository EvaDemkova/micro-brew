import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './Dashboard'
import Feed from './Feed'
import Map from './Map'
import Profile from './Profile'
import Header from './Header'
import Homepage from '../Homepage/Homepage'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/feed'>
          <Feed />
        </Route>
        <Route path='/map'>
          <Map />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
