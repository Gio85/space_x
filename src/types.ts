import { Action, ThunkAction } from '@reduxjs/toolkit'

export enum HOST {
  API = 'https://api.spacexdata.com/v4'
}

export enum API_ENDPOINT {
  COMPANY = 'company',
  CAPSULES= 'capsules'
}

export enum APP_ENDPOINT {
  HOME = '/',
  CAPSULES= 'capsules'
}

export enum HTTP_METHOD {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch'
}

export interface IHttpClient {
  // post<Input, Output>(path: string, payload: Input): ApiResponse<Output>

  get<Output, Input = Record<string, unknown>>(path: string, payload?: Input): ApiResponse<Output>
}

export type ApiResponse<T> = Promise<T>

export type IThunk = ThunkAction<void, IRootStore, unknown, Action<string>>

export interface IRemoteData {
  loading: boolean
  error: null | string
}

export interface ICompanyDetailsStore extends IRemoteData {
  data: ICompany | null
}

export interface ICompany {
  id: string
  name: string
  founder: string
  founded: number
  employees: number
  launch_sites: number
  vehicles: number
  test_sites: number
  ceo: string
  cto: string
  coo: string
  cto_propulsion: string
  valuation: number
  summary: string
  headquarters: ICompanyHeadQuarters
  links: ICompanyLinks
}

export interface ICompanyHeadQuarters {
  address: string
  city: string
  state: string
}

export interface ICompanyLinks {
  website: string
  flickr: string
  twitter: string
  elon_twitter: string
}

export interface IRootStore {
  companyDetails: ICompanyDetailsStore
}

export interface IError {
  id?: string
  showed?: boolean
  message: string
  title: string
}
