import { Periodicity } from '@/data/constants/Periodicity.constant'
import { data } from '@/data/data'
import { useQueryOccurenceList } from './useQueryOccurenceList.hook'

export const useRemoveOccurence = (
  habitId: string,
  periodicity: Periodicity
) => {
  const { occurences } = useQueryOccurenceList(habitId, periodicity)
  const removeOccurence = () => {
    const lastOccurence = occurences.value.pop()

    if (lastOccurence) {
      data.remove(lastOccurence._id ?? '')
    }
  }

  return {
    removeOccurence
  }
}
