import { CompanyEndpoint } from './endpoints/company'
import { HttpClient } from './http'
import { CrewEndpoint } from './endpoints/crew'

export class ApiClient {
  public company: CompanyEndpoint
  public crew: CrewEndpoint
  protected client: HttpClient
  private static instance: ApiClient

  constructor() {
    this.client = new HttpClient()
    this.company = new CompanyEndpoint(this.client)
    this.crew = new CrewEndpoint(this.client)
  }

  public static factory(): ApiClient {
    if(!this.instance) {
      return ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }
}