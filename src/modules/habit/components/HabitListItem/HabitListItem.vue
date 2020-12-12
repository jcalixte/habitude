<template>
  <div class="habit-list-item" @click="createOccurence(new Date())">
    <component
      :is="habitComponent"
      :habit="habit"
      :occurences="occurences.length"
    />
  </div>
</template>

<script lang="ts">
import { Habit } from '@/data/models/Habit'
import { defineComponent, PropType } from 'vue'
import HabitImprove from '@/modules/habit/components/HabitImprove/HabitImprove.vue'
import { useCreateOccurence } from '@/modules/occurence/hooks/useCreateOccurence.hook'
import { useRemoveOccurence } from '@/modules/occurence/hooks/useRemoveOccurence.hook'
import { useQueryOccurenceList } from '@/modules/occurence/hooks/useQueryOccurenceList.hook'

export default defineComponent({
  name: 'HabitListItem',
  components: {
    HabitImprove
  },
  props: {
    habit: { required: true, type: Object as PropType<Habit> }
  },
  setup(props) {
    const { createOccurence } = useCreateOccurence(props.habit._id ?? '')
    const { removeOccurence } = useRemoveOccurence(
      props.habit._id ?? '',
      props.habit.periodicity
    )
    const { occurences } = useQueryOccurenceList(
      props.habit._id ?? '',
      props.habit.periodicity
    )

    return {
      habitComponent: `habit-${props.habit.habitType}`,
      createOccurence,
      removeOccurence,
      occurences
    }
  }
})
</script>

<style scoped lang="scss">
.habit-list-item {
}
</style>
