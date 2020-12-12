<template>
  <div class="habit-details">
    <Calendar :attributes="calendarAttributes" />
    <button class="button is-danger" @click="removeOccurence">
      remove last occurence
    </button>
  </div>
</template>

<script lang="ts">
import { useQueryOccurenceList } from '@/modules/occurence/hooks/useQueryOccurenceList.hook'
import { computed, defineComponent } from 'vue'
import { Calendar } from 'v-calendar'
import { useRemoveOccurence } from '@/modules/occurence/hooks/useRemoveOccurence.hook'

export default defineComponent({
  name: 'HabitDetails',
  components: {
    Calendar
  },
  props: {
    id: { type: String, required: true }
  },
  setup(props) {
    const { occurences } = useQueryOccurenceList(props.id)
    const { removeOccurence } = useRemoveOccurence(props.id)
    const calendarAttributes = computed(() => [
      {
        dot: true,
        dates: occurences.value.map(
          (occurence) => new Date(occurence.createdAt)
        )
      }
    ])

    return {
      occurences,
      calendarAttributes,
      removeOccurence
    }
  }
})
</script>

<style lang="scss" scoped>
.habit-details {
}
</style>
