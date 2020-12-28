import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICapsule, IDataStore, IThunk } from '../../types'
import { ApiClient } from '../../api/client'
import { pushErrorAction } from './errors/errorsSlice'

const defaultState = {
  loading: false,
  error: null,
  data: null
}

export const capsulesListSlice = createSlice({
  name: 'capsulesList',
  initialState: defaultState,
  reducers: {
    loadingCapsulesListAction: (state: IDataStore<ICapsule>, action: PayloadAction<{ isLoading: boolean }>) => {
      state.loading = action.payload.isLoading
    },
    errorCapsulesListAction: (state: IDataStore<ICapsule>, action: PayloadAction<{ message: string }>) => {
      state.loading = defaultState.loading
      state.error = action.payload.message
    },
    setCapsulesListData: (state: IDataStore<ICapsule[]>, action: PayloadAction<{ data: ICapsule[] }>) => {
      state.error = defaultState.error
      state.loading = defaultState.loading
      state.data = action.payload.data
    }
  }
})

export const { errorCapsulesListAction, loadingCapsulesListAction, setCapsulesListData } = capsulesListSlice.actions
export const fetchCapsulesListThunk = (): IThunk => async (dispatch) => {
  try {
    dispatch(loadingCapsulesListAction({ isLoading: true }))
    const client = ApiClient.factory()
    const data: ICapsule[] = await client.capsules.list()
    dispatch(setCapsulesListData({ data }))
  } catch (error) {
    dispatch(
      pushErrorAction({
        title: 'There was a problem fetching capsules list data',
        message: 'Fetching capsules list data error'
      })
    )
    dispatch(errorCapsulesListAction({ message: error.message }))
  }
}
