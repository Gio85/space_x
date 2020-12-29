import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDataStore, IRocket, IThunk } from '../../types'
import { ApiClient } from '../../api/client'
import { pushErrorAction } from './errors/errorsSlice'

const defaultState = {
  loading: false,
  error: null,
  data: null
}

export const rocketsListSlice = createSlice({
  name: 'rocketsList',
  initialState: defaultState,
  reducers: {
    loadingRocketsListAction: (state: IDataStore<IRocket>, action: PayloadAction<{ isLoading: boolean }>) => {
      state.loading = action.payload.isLoading
    },
    errorRocketsListAction: (state: IDataStore<IRocket>, action: PayloadAction<{ message: string }>) => {
      state.loading = defaultState.loading
      state.error = action.payload.message
    },
    setRocketsListData: (state: IDataStore<IRocket[]>, action: PayloadAction<{ data: IRocket[] }>) => {
      state.error = defaultState.error
      state.loading = defaultState.loading
      state.data = action.payload.data
    }
  }
})

export const { errorRocketsListAction, loadingRocketsListAction, setRocketsListData } = rocketsListSlice.actions
export const fetchRocketsListThunk = (): IThunk => async (dispatch) => {
  try {
    dispatch(loadingRocketsListAction({ isLoading: true }))
    const client = ApiClient.factory()
    const data = await client.rockets.list()
    dispatch(setRocketsListData({ data }))
  } catch (error) {
    dispatch(
      pushErrorAction({
        title: 'There was a problem fetching rockets list data',
        message: 'Fetching rockets list data error'
      })
    )
    dispatch(errorRocketsListAction({ message: error.message }))
  }
}
