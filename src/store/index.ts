import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  capsulesListSlice,
  companyDetailsSlice,
  crewListSlice,
  crewReadSlice,
  errorsSlice,
  rocketReadSlice,
  rocketsListSlice
} from './features'

export const store = configureStore({
  reducer: combineReducers({
    [errorsSlice.name]: errorsSlice.reducer,
    [companyDetailsSlice.name]: companyDetailsSlice.reducer,
    [crewListSlice.name]: crewListSlice.reducer,
    [crewReadSlice.name]: crewReadSlice.reducer,
    [capsulesListSlice.name]: capsulesListSlice.reducer,
    [rocketsListSlice.name]: rocketsListSlice.reducer,
    [rocketReadSlice.name]: rocketReadSlice.reducer
  })
})
