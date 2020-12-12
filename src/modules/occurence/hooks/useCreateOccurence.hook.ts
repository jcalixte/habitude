import { nanoid } from 'nanoid'
import { data } from '@/data/data'
import { DataType } from '@/data/Datatype.enum'
import { Occurence } from '@/data/models/Occurence'

export const useCreateOccurence = (habitId: string) => {
  const createOccurence = async (date: Date) => {
    const createdAt = date.toISOString()

    const occurence: Occurence = {
      $type: DataType.Occurence,
      _id: `${DataType.Occurence}-${habitId}-${createdAt}-${nanoid()}`,
      createdAt,
      habitId: habitId
    }

    return data.add(occurence)
  }

  return {
    createOccurence
  }
}
