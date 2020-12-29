import { API_ENDPOINT, ApiResponse, IHttpClient, IRocket } from '../../../types'
import { BaseEndpoint } from './shared/base'

export class RocketsEndpoint extends BaseEndpoint<IRocket>{
  public path = `${API_ENDPOINT.ROCKETS}`
  constructor(protected readonly client: IHttpClient) {
    super(client)
  }

  read(id: string): ApiResponse<IRocket> {
    return super.read(this.path, id)
  }

  list(): ApiResponse<IRocket[]> {
    return super.list(this.path)
  }
}
