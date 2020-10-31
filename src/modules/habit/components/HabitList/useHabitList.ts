import { useQueryHabitList } from '@/modules/habit/hooks/useQueryHabitList.hook'

export const useHabitList = async () => {
  const { habits } = useQueryHabitList()

  return {
    habits
  }
}
