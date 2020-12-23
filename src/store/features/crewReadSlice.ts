import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICrew, IDataStore, IThunk } from '../../types'
import { ApiClient } from '../../api/client'
import { pushErrorAction } from './errors/errorsSlice'

const defaultState = {
  loading: false,
  error: null,
  data: null
}

export const crewReadSlice = createSlice({
  name: 'crewRead',
  initialState: defaultState,
  reducers: {
    loadingCrewReadAction: (state: IDataStore<ICrew>, action: PayloadAction<{ isLoading: boolean }>) => {
      state.loading = action.payload.isLoading
    },
    errorCrewReadAction: (state: IDataStore<ICrew>, action: PayloadAction<{ message: string }>) => {
      state.loading = defaultState.loading
      state.error = action.payload.message
    },
    setCrewReadData: (state: IDataStore<ICrew>, action: PayloadAction<{ data: ICrew }>) => {
      state.error = defaultState.error
      state.loading = defaultState.loading
      state.data = action.payload.data
    }
  }
})

export const { errorCrewReadAction, loadingCrewReadAction, setCrewReadData } = crewReadSlice.actions
export const fetchCrewReadThunk = (id: string): IThunk => async (dispatch) => {
  try {
    dispatch(loadingCrewReadAction({ isLoading: true }))
    const client = ApiClient.factory()
    const data = await client.crew.read(id)
    dispatch(setCrewReadData({ data }))
  } catch (error) {
    dispatch(
      pushErrorAction({
        title: 'There was a problem fetching crew read data',
        message: 'Fetching crew read data error'
      })
    )
    dispatch(errorCrewReadAction({ message: error.message }))
  }
}
