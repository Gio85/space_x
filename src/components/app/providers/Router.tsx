import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage'
import { APP_ENDPOINT } from '../../../types'
import { CrewListPage } from '../../pages/CrewList'
import { CrewReadPage } from '../../pages/CrewRead'

export const AppRouterProvider: React.FC = () => (
  <Router basename={window.location.pathname || ''}>
    <Switch>
      <Route exact path={`/${APP_ENDPOINT.CREW}`} component={CrewListPage} />
      <Route exact path={`/${APP_ENDPOINT.CREW}/:id`} component={CrewReadPage} />
      <Route exact path={'/'} component={HomePage} />
    </Switch>
  </Router>
)
