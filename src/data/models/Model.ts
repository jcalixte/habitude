import { DataType } from '../Datatype.enum'

export interface Model<D extends DataType> {
  _id?: string
  _rev?: string
  _deleted?: boolean
  $type: D
}
