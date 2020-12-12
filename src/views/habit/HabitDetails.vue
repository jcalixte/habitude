<template>
  <div class="habit-details">
    <p>
      {{
        t('habit.details.totalOccurences', occurences.length, {
          named: { totalOccurences: occurences.length }
        })
      }}
    </p>
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
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HabitDetails',
  components: {
    Calendar
  },
  props: {
    id: { type: String, required: true }
  },
  setup(props) {
    const { t } = useI18n()
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
      t,
      occurences,
      calendarAttributes,
      removeOccurence
    }
  }
})
</script>

<style lang="scss" scoped>
.habit-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
