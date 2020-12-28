import { API_ENDPOINT, ApiResponse, ICrew } from '../../../types'
import { BaseEndpoint } from './shared/base'
import { HttpClient } from '../http'

export class CrewEndpoint extends BaseEndpoint<ICrew> {
  public path = `${API_ENDPOINT.CREW}`
  constructor(protected readonly client: HttpClient) {
    super(client);
  }

  list(): ApiResponse<ICrew[]> {
    return super.list(this.path)
  }

  read(id: string): ApiResponse<ICrew> {
   return super.read(this.path, id)
 }
}
