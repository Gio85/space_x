import { API_ENDPOINT, ApiResponse, ICapsule, IHttpClient } from '../../../types'
import { BaseEndpoint } from './shared/base'

export class CapsulesEndpoint extends BaseEndpoint<ICapsule>{
  public path = `${API_ENDPOINT.CAPSULES}`
  constructor(protected readonly client: IHttpClient) {
    super(client)
  }

  list(): ApiResponse<ICapsule[]> {
    return super.list(this.path)
  }
}
