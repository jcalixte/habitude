import { DataType } from '@/data/Datatype.enum'
import { Habit } from '@/data/models/Habit'
import { reactive } from 'vue'

export const useHabitForm = () => {
  const habit = reactive<Habit>({
    $type: DataType.Habit,
    name: '',
    createdAt: new Date().toISOString(),
    habitType: 'improve',
    periodicity: 'daily',
    goal: 1
  })

  return {
    habit
  }
}
