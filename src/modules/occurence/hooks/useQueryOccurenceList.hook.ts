import { Periodicity } from '@/data/constants/Periodicity.constant'
import { data } from '@/data/data'
import { DataType } from '@/data/Datatype.enum'
import { Occurence } from '@/data/models/Occurence'
import { getRangeOfPeriodicity } from '@/modules/periodicity/utils/getRangeOfPeriodicity.util'
import { addEventBusListener, removeEventBusListener } from 'retrobus'
import { onMounted, onUnmounted, ref } from 'vue'

export const useQueryOccurenceList = (
  habitId: string,
  periodicity?: Periodicity
) => {
  const ready = ref(false)
  const occurences = ref<Occurence[]>([])
  const fetchOccurences = async () => {
    if (periodicity) {
      const [startDate, endDate] = getRangeOfPeriodicity(
        periodicity,
        new Date()
      )

      occurences.value = await data.getAll<DataType.Occurence, Occurence>({
        startKey: data.getId(
          DataType.Occurence,
          habitId,
          startDate.toISOString()
        ),
        endKey: data.getId(DataType.Occurence, habitId, endDate.toISOString())
      })
    } else {
      occurences.value = await data.getAll<DataType.Occurence, Occurence>({
        prefix: data.getId(DataType.Occurence, habitId)
      })
    }
    ready.value = true
  }

  onMounted(async () => {
    await fetchOccurences()
    addEventBusListener(DataType.Occurence, fetchOccurences)
  })

  onUnmounted(() => {
    removeEventBusListener(DataType.Occurence, fetchOccurences)
  })

  return {
    occurences,
    ready
  }
}
