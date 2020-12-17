import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { IError } from '../../../types'

export const errorsSlice = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {
    pushErrorAction: (state: IError[], action: PayloadAction<IError>) => {
      state.push({ ...action.payload, showed: false, id: uuid() })
    },
    setErrorShowed: (state: IError[], action: PayloadAction<IError>) => {
      const error = state.find(error => error.id === action.payload.id)
      if (!error) {
        return
      }
      error!.showed = true
    }
  }
})

export const { pushErrorAction, setErrorShowed } = errorsSlice.actions