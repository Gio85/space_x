import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { companyDetailsSlice } from './features/companyDetailsSlice'
import { errorsSlice } from './features/errors/errorsSlice'

export const store = configureStore({
  reducer: combineReducers({
    [errorsSlice.name]: errorsSlice.reducer,
    [companyDetailsSlice.name]: companyDetailsSlice.reducer
  })
})
