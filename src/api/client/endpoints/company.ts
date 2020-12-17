import { ApiResponse, ENDPOINT, ICompany, IHttpClient } from '../../../types'

export class CompanyEndpoint {
  public path = `${ENDPOINT.COMPANY}`
  constructor(protected readonly client: IHttpClient) {}

  public read(): ApiResponse<ICompany> {
    return this.client.get<ICompany>(this.path)
  }
}
