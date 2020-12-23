export interface ICompany {
  id: string
  name: string
  founder: string
  founded: number
  employees: number
  launch_sites: number
  vehicles: number
  test_sites: number
  ceo: string
  cto: string
  coo: string
  cto_propulsion: string
  valuation: number
  summary: string
  headquarters: ICompanyHeadQuarters
  links: ICompanyLinks
}

export interface ICompanyHeadQuarters {
  address: string
  city: string
  state: string
}

export interface ICompanyLinks {
  website: string
  flickr: string
  twitter: string
  elon_twitter: string
}
