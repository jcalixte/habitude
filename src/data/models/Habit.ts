import { Periodicity } from '../constants/Periodicity.constant'
import { DataType } from '../Datatype.enum'
import { Model } from './Model'

export interface Habit extends Model<DataType.Habit> {
  createdAt: string
  name: string
  habitType: 'improve' | 'diminish'
  periodicity: Periodicity
  goal: number
}
