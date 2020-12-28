import { ApiResponse, IHttpClient } from '../../../../types'

export class BaseEndpoint<T> {
  constructor(protected readonly client: IHttpClient) {}

  public read(path: string, id?: string): ApiResponse<T> {
    return this.client.get<T>(id ? `${path}/${id}` : path)
  }

  public list(path: string): ApiResponse<T[]> {
    return this.client.get<T[]>(path)
  }
}
