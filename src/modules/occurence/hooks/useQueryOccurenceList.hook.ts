import { data } from '@/data/data'
import { DataType } from '@/data/Datatype.enum'
import { useAsyncState } from '@vueuse/core'

export const useQueryOccurenceList = (habitId: string) => {
  const { state: occurences, ready } = useAsyncState(
    data.getAll({ prefix: data.getId(DataType.Occurence, habitId) }),
    []
  )

  return {
    occurences,
    ready
  }
}
