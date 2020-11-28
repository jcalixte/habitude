import { useQueryHabitList } from '@/modules/habit/hooks/useQueryHabitList.hook'

export const useHabitList = () => {
  const { habits } = useQueryHabitList()

  return {
    habits
  }
}
