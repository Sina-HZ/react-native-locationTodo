export type Action = { type: string, payload: any }
export type Dispatch = (action: Action) => any
export type Region = { latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number }
export type Coordinate = { latitude: number, longitude: number }
export type State = { name: string, status: string, description: string, region?: Region, coordinate?: Coordinate}
export type Context = { state: State[], dispatch?: Dispatch }
export type TaskProviderProps = { children: React.ReactNode }