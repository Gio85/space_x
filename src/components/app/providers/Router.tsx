import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage'
import { APP_ENDPOINT } from '../../../types'
import { CrewListPage } from '../../pages/CrewList'
import { CrewReadPage } from '../../pages/CrewRead'
import { CapsulesList } from '../../pages/CapsulesList'

export const AppRouterProvider: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path={`/${APP_ENDPOINT.CREW}/:id`} component={CrewReadPage} />
      <Route path={`/${APP_ENDPOINT.CREW}`} component={CrewListPage} />
      <Route path={`/${APP_ENDPOINT.CAPSULES}`} component={CapsulesList} />
      <Route exact path={'/'} component={HomePage} />
    </Switch>
  </HashRouter>
)
