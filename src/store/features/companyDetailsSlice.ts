import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICompany, IDataStore, IThunk } from '../../types'
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
    loadingCompanyAction: (state: IDataStore<ICompany>, action: PayloadAction<{ isLoading: boolean }>) => {
      state.loading = action.payload.isLoading
    },
    errorCompanyAction: (state: IDataStore<ICompany>, action: PayloadAction<{ message: string }>) => {
      state.loading = defaultState.loading
      state.error = action.payload.message
    },
    setCompanyDetailsData: (state: IDataStore<ICompany>, action: PayloadAction<{ data: ICompany }>) => {
      state.error = defaultState.error
      state.loading = defaultState.loading
      state.data = action.payload.data
    }
  }
})

export const { errorCompanyAction, loadingCompanyAction, setCompanyDetailsData } = companyDetailsSlice.actions
export const fetchCompanyDetailsThunk = (): IThunk => async (dispatch) => {
  try {
    dispatch(loadingCompanyAction({ isLoading: true }))
    const client = ApiClient.factory()
    const data = await client.company.read()
    dispatch(setCompanyDetailsData({ data }))
  } catch (error) {
    dispatch(
      pushErrorAction({
        title: 'There was a problem fetching company details data',
        message: 'Fetching company details data error'
      })
    )
    dispatch(errorCompanyAction({ message: error.message }))
  }
}
