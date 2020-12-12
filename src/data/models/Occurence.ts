import { DataType } from '../Datatype.enum'
import { Model } from './Model'

export interface Occurence extends Model<DataType.Occurence> {
  habitId: string
  createdAt: string
}
