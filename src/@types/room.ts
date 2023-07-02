export interface RoomCreate {
  id: string
  name: string
  sensor: string
  temperature: any
  humidity: any
  air_conditioners: AirConditioner[]
}
export interface RoomGet {
  id?: string
  name?: string
  sensor?: string
  temperature?: number
  humidity?: number
  air_conditioner?: AirConditioner
}

export interface AirConditioner {
  id: string
  model: string
  temperature: any
  room_id: string
}