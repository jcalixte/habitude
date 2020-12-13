import { Habit } from '@/data/models/Habit'
import { Occurence } from '@/data/models/Occurence'
import { computed, Ref } from 'vue'

export const useInfoHabit = (habit: Habit, occurences: Ref<Occurence[]>) => {
  const isSuccess = computed(() =>
    habit ? occurences.value.length >= (habit.goal ?? 0) : false
  )

  return {
    isSuccess
  }
}
