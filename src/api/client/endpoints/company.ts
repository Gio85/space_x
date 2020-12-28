import { API_ENDPOINT, ApiResponse, ICompany, IHttpClient } from '../../../types'
import { BaseEndpoint } from './shared/base'

export class CompanyEndpoint extends BaseEndpoint<ICompany>{
  public path = `${API_ENDPOINT.COMPANY}`
  constructor(protected readonly client: IHttpClient) {
    super(client)
  }

  read(): ApiResponse<ICompany> {
    return super.read(this.path)
  }
}
