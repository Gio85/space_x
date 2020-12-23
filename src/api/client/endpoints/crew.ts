import { API_ENDPOINT, ApiResponse, IHttpClient } from '../../../types'
import { ICrew } from '../../../types/crew'

export class CrewEndpoint {
  public path = `${API_ENDPOINT.CREW}`
  constructor(protected readonly client: IHttpClient) {}

  public list(): ApiResponse<ICrew[]> {
    return this.client.get<ICrew[]>(this.path)
  }

  public read(id: string): ApiResponse<ICrew> {
    return this.client.get<ICrew>(`${this.path}/${id}`)
  }
}
