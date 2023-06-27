export interface RoomCreate {
  name: string;
  sensor: string;
  air_conditioners: AirConditioner[];
}

export interface AirConditioner {
  model: string;
}
