import { data } from '@/data/data'
import { DataType } from '@/data/Datatype.enum'
import { Habit } from '@/data/models/Habit'
import { useAsyncState } from '@vueuse/core'

export const useQueryHabit = (id: string) => {
  const { state: habit, ready } = useAsyncState(
    data.get<DataType.Habit, Habit>(id),
    null
  )

  return {
    habit,
    ready
  }
}
