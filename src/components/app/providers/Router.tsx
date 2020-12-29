import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { APP_ENDPOINT } from '../../../types'
import { CapsulesListPage, CrewListPage, CrewReadPage, HomePage, RocketReadPage, RocketsListPage } from '../../pages'

export const AppRouterProvider: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route exact path={`${APP_ENDPOINT.CREW}/:id`} component={CrewReadPage} />
      <Route exact path={APP_ENDPOINT.CREW} component={CrewListPage} />
      <Route exact path={APP_ENDPOINT.CAPSULES} component={CapsulesListPage} />
      <Route exact path={`${APP_ENDPOINT.ROCKETS}/:id`} component={RocketReadPage} />
      <Route exact path={APP_ENDPOINT.ROCKETS} component={RocketsListPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </HashRouter>
)
