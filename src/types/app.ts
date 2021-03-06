import { Action, ThunkAction } from '@reduxjs/toolkit'
import { ICompany } from './company'
import { ICrew } from './crew'
import { ICapsule } from './capsules'
import { IRocket } from './rockets'

export enum HOST {
  API = 'https://api.spacexdata.com/v4'
}

export enum API_ENDPOINT {
  COMPANY = 'company',
  CAPSULES= 'capsules',
  ROCKETS = 'rockets',
  CREW = 'crew'
}

export enum APP_ENDPOINT {
  HOME = '/',
  CAPSULES= '/capsules',
  ROCKETS = '/rockets',
  CREW = '/crew'
}

export enum HTTP_METHOD {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch'
}

export interface IHttpClient {
  get<Output, Input = Record<string, unknown>>(path: string, payload?: Input): ApiResponse<Output>
}

export type ApiResponse<T> = Promise<T>

export type IThunk = ThunkAction<void, IRootStore, unknown, Action<string>>

export interface IDataStore<T> {
  loading: boolean
  error: null | string
  data: T | null
}

export interface IRootStore {
  companyDetails: IDataStore<ICompany>
  crewList: IDataStore<ICrew[]>
  crewRead: IDataStore<ICrew>
  capsulesList: IDataStore<ICapsule>
  rocketsList: IDataStore<IRocket[]>
  rocketRead: IDataStore<IRocket>
}