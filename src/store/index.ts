import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { companyDetailsSlice, crewListSlice, errorsSlice } from './features'
import { crewReadSlice } from './features/crewReadSlice'
import { capsulesListSlice } from './features/capsulesListSlice'

export const store = configureStore({
  reducer: combineReducers({
    [errorsSlice.name]: errorsSlice.reducer,
    [companyDetailsSlice.name]: companyDetailsSlice.reducer,
    [crewListSlice.name]: crewListSlice.reducer,
    [crewReadSlice.name]: crewReadSlice.reducer,
    [capsulesListSlice.name]: capsulesListSlice.reducer
  })
})
