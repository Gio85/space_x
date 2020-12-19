import { API_ENDPOINT, ApiResponse, ICompany, IHttpClient } from '../../../types'

export class CompanyEndpoint {
  public path = `${API_ENDPOINT.COMPANY}`
  constructor(protected readonly client: IHttpClient) {}

  public read(): ApiResponse<ICompany> {
    return this.client.get<ICompany>(this.path)
  }
}
