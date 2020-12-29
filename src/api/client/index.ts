import { CapsulesEndpoint, CompanyEndpoint, CrewEndpoint, RocketsEndpoint } from './endpoints'
import { HttpClient } from './http'

export class ApiClient {
  public company: CompanyEndpoint
  public crew: CrewEndpoint
  public capsules: CapsulesEndpoint
  public rockets: RocketsEndpoint
  protected client: HttpClient
  private static instance: ApiClient

  constructor() {
    this.client = new HttpClient()
    this.company = new CompanyEndpoint(this.client)
    this.crew = new CrewEndpoint(this.client)
    this.capsules = new CapsulesEndpoint(this.client)
    this.rockets = new RocketsEndpoint(this.client)
  }

  public static factory(): ApiClient {
    if (!this.instance) {
      return (ApiClient.instance = new ApiClient())
    }
    return ApiClient.instance
  }
}