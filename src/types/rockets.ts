export interface IRocket {
  height: IRocketHeightAndDiameter
  diameter: IRocketHeightAndDiameter
  mass: IRocketMass
  first_stage: IRocketFirstStage
  second_stage: IRocketSecondStage
  engines: IRocketEngines
  landing_legs: IRocketLandingLegs
  payload_weights: IRocketPayloadWeights[]
  flickr_images: string[]
  name: string
  type: string
  active: boolean
  stages: number
  boosters: number
  cost_per_launch: number
  success_rate_pct: number
  first_flight: string
  country: string
  company: string
  wikipedia: string
  description: string
  id: string
}

export interface IRocketHeightAndDiameter {
  meters: number
  feet: number
}

export interface IRocketMass {
  kg: number
  lb: number
}

export interface IRocketFirstStage {
  thrust_sea_level: IRocketThrust
  thrust_vacuum: IRocketThrust
  reusable: boolean
  engines: number
  fuel_amount_tons: number
  burn_time_sec: number
}

export interface IRocketSecondStage {
  thrust: IRocketThrust
  payloads: IRocketSecondStagePayload
  reusable: boolean
  engines: number
  fuel_amount_tons: number
  burn_time_sec: number
}

export interface IRocketSecondStagePayload {
  composite_fairing: {
    height: IRocketHeightAndDiameter
    diameter: IRocketHeightAndDiameter
  }
  option_1: string
}

export interface IRocketEngines {
  isp: {
    sea_level: number
    vacuum: number
  }
  thrust_sea_level: IRocketThrust
  thrust_vacuum: IRocketThrust
  number: number
  type: string
  version: string
  layout: string
  engine_loss_max: number
  propellant_1: string
  propellant_2: string
  thrust_to_weight: number
}

export interface IRocketLandingLegs {
  number: number
  material: string | null
}

export interface IRocketPayloadWeights {
  id: string
  name: string
  kg: number
  lb: number
}

export interface IRocketThrust {
  kN: number
  lbf: number
}
