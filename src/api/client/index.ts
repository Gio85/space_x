import { CompanyEndpoint } from './endpoints/company'
import { HttpClient } from './http'

export class ApiClient {
  public company: CompanyEndpoint
  protected client: HttpClient
  private static instance: ApiClient

  constructor() {
    this.client = new HttpClient()
    this.company = new CompanyEndpoint(this.client)
  }

  public static factory(): ApiClient {
    if(!this.instance) {
      return ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }
}