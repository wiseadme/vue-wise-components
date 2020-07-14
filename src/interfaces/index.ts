export interface RootState {
  author: string
}

export interface DataState {
  reservedRooms: RoomDateTime[]
}

export interface TableDate {
  year: number
  month: string
  day: string
  date: number
}

export interface Time {
  time: string
  available: boolean
  disabled: boolean
  selected: boolean
}

export interface Room {
  name: string
  maxPersons: string
}

export interface RoomDateTime {
  time: Time
  date: TableDate
  room: string
}