import React from 'react'
import 'antd/dist/antd.css'
import { AppRouterProvider } from './providers/Router'
import { AppStoreProvider } from './providers/Store'

export const App: React.FC = () => {
  return (
    <AppStoreProvider>
      <AppRouterProvider />
    </AppStoreProvider>
  )
}
