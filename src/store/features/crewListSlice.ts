import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDataStore, IThunk } from '../../types'
import { ApiClient } from '../../api/client'
import { pushErrorAction } from './errors/errorsSlice'
import { ICrew } from '../../types/crew'

const defaultState = {
  loading: false,
  error: null,
  data: null
}

export const crewListSlice = createSlice({
  name: 'crewList',
  initialState: defaultState,
  reducers: {
    loadingCrewListAction: (state: IDataStore<ICrew>, action: PayloadAction<{ isLoading: boolean }>) => {
      state.loading = action.payload.isLoading
    },
    errorCrewListAction: (state: IDataStore<ICrew>, action: PayloadAction<{ message: string }>) => {
      state.loading = defaultState.loading
      state.error = action.payload.message
    },
    setCrewListData: (state: IDataStore<ICrew[]>, action: PayloadAction<{ data: ICrew[] }>) => {
      state.error = defaultState.error
      state.loading = defaultState.loading
      state.data = action.payload.data
    }
  }
})

export const { errorCrewListAction, loadingCrewListAction, setCrewListData } = crewListSlice.actions
export const fetchCrewListThunk = (): IThunk => async (dispatch) => {
  try {
    dispatch(loadingCrewListAction({ isLoading: true }))
    const client = ApiClient.factory()
    const data = await client.crew.list()
    dispatch(setCrewListData({ data }))
  } catch (error) {
    dispatch(
      pushErrorAction({
        title: 'There was a problem fetching crew list data',
        message: 'Fetching crew list data error'
      })
    )
    dispatch(errorCrewListAction({ message: error.message }))
  }
}
