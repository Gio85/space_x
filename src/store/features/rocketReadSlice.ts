import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDataStore, IRocket, IThunk } from '../../types'
import { ApiClient } from '../../api/client'
import { pushErrorAction } from './errors/errorsSlice'

const defaultState = {
  loading: false,
  error: null,
  data: null
}

export const rocketReadSlice = createSlice({
  name: 'rocketRead',
  initialState: defaultState,
  reducers: {
    loadingRocketReadAction: (state: IDataStore<IRocket>, action: PayloadAction<{ isLoading: boolean }>) => {
      state.loading = action.payload.isLoading
    },
    errorRocketReadAction: (state: IDataStore<IRocket>, action: PayloadAction<{ message: string }>) => {
      state.loading = defaultState.loading
      state.error = action.payload.message
    },
    setRocketReadData: (state: IDataStore<IRocket>, action: PayloadAction<{ data: IRocket }>) => {
      state.error = defaultState.error
      state.loading = defaultState.loading
      state.data = action.payload.data
    }
  }
})

export const { errorRocketReadAction, loadingRocketReadAction, setRocketReadData } = rocketReadSlice.actions
export const fetchRocketReadThunk = (id: string): IThunk => async (dispatch) => {
  try {
    dispatch(loadingRocketReadAction({ isLoading: true }))
    const client = ApiClient.factory()
    const data = await client.rockets.read(id)
    dispatch(setRocketReadData({ data }))
  } catch (error) {
    dispatch(
      pushErrorAction({
        title: 'There was a problem fetching rocket data',
        message: 'Fetching rocket data error'
      })
    )
    dispatch(errorRocketReadAction({ message: error.message }))
  }
}
