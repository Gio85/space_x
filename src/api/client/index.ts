import { CapsulesEndpoint, CompanyEndpoint, CrewEndpoint } from './endpoints'
import { HttpClient } from './http'

export class ApiClient {
  public company: CompanyEndpoint
  public crew: CrewEndpoint
  public capsules: CapsulesEndpoint
  protected client: HttpClient
  private static instance: ApiClient

  constructor() {
    this.client = new HttpClient()
    this.company = new CompanyEndpoint(this.client)
    this.crew = new CrewEndpoint(this.client)
    this.capsules = new CapsulesEndpoint(this.client)
  }

  public static factory(): ApiClient {
    if (!this.instance) {
      return (ApiClient.instance = new ApiClient())
    }
    return ApiClient.instance
  }
}