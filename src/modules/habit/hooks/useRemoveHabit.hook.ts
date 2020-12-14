import { data } from '@/data/data'

export const useRemoveHabit = (habitId: string) => {
  const removeHabit = async () => {
    return await data.remove(habitId)
  }

  return {
    removeHabit
  }
}
