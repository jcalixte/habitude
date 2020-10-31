import { data } from '@/data/data'
import { DataType } from '@/data/Datatype.enum'
import { useAsyncState } from '@vueuse/core'

export const useQueryHabitList = () => {
  const { state: habits, ready } = useAsyncState(
    data.getAll({
      prefix: DataType.Habit
    }),
    []
  )

  return {
    habits,
    ready
  }
}
