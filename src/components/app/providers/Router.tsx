import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../../pages/Home'

export const AppRouterProvider: React.FC = () => (
  <Router basename={window.location.pathname || ''}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)
