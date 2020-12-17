import Axios, { AxiosRequestConfig } from 'axios'
import { ApiResponse, HOST, HTTP_METHOD, IHttpClient } from '../../../types'

export class HttpClient implements IHttpClient {
  protected api: string = HOST.API

  public get<T>(endpoint: string, parameters?: unknown): ApiResponse<T> {
    return Axios.get(`${this.api}/${endpoint}`, {
      params: parameters || null,
      ...this.getRequestConfig()
    })
      .then(({ data }) => data)
      .catch((error) => console.error(error, endpoint, HTTP_METHOD.GET))
  }

  protected getRequestConfig(): AxiosRequestConfig {
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}
