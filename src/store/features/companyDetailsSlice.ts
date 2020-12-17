import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICompany, ICompanyDetailsStore, IThunk } from '../../types'
import { ApiClient } from '../../api/client'
import { pushErrorAction } from './errors/errorsSlice'

const defaultState = {
  loading: false,
  error: null,
  data: null
}

export const companyDetailsSlice = createSlice({
  name: 'companyDetails',
  initialState: defaultState,
  reducers: {
    loadingAction: (state: ICompanyDetailsStore, action: PayloadAction<{ isLoading: boolean }>) => {
      state.loading = action.payload.isLoading
    },
    errorAction: (state: ICompanyDetailsStore, action: PayloadAction<{ message: string }>) => {
      state.loading = defaultState.loading
      state.error = action.payload.message
    },
    setCompanyDetailsData: (state: ICompanyDetailsStore, action: PayloadAction<{ data: ICompany }>) => {
      state.error = defaultState.error
      state.loading = defaultState.loading
      state.data = action.payload.data
    }
  }
})

export const { errorAction, loadingAction, setCompanyDetailsData } = companyDetailsSlice.actions
export const fetchCompanyDetailsThunk = (): IThunk => async (dispatch) => {
  try {
    dispatch(loadingAction({ isLoading: true }))
    const client = ApiClient.factory()
    const data = await client.company.read()
    dispatch(setCompanyDetailsData({ data }))
  } catch (error) {
    dispatch(
      pushErrorAction({
        title: 'There was a problem fetching your dashboard data',
        message: 'Fetching dashboard data error'
      })
    )
    dispatch(errorAction({ message: error.message }))
  }
}
