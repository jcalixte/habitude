import { data } from '@/data/data'
import { DataType } from '@/data/Datatype.enum'
import { Model } from '@/data/models/Model'

interface HabitListResult {
  habits: Model<DataType.Habit>[]
}

export const useHabitList = async (): Promise<HabitListResult> => {
  const habits = await data.getAll<DataType.Habit, Model<DataType.Habit>>({
    prefix: DataType.Habit
  })

  return {
    habits
  }
}
