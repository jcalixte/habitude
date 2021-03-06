import { nanoid } from 'nanoid'
import { data } from '@/data/data'
import { DataType } from '@/data/Datatype.enum'
import { Habit } from '@/data/models/Habit'

export const useCreateHabit = () => {
  const createHabit = async (habit: Habit) => {
    return data.add({
      _id: habit._id ?? `${DataType.Habit}-${nanoid()}`,
      ...habit
    })
  }

  return { createHabit }
}
