<template>
  <div class="habit-details" v-if="ready">
    <p>
      {{
        t('habit.details.totalOccurences', occurences.length, {
          named: { totalOccurences: occurences.length }
        })
      }}
    </p>
    <Calendar
      :attributes="calendarAttributes"
      @dayclick="createOccurence"
      :max-date="maxDate"
    />
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
import { useCreateOccurence } from '@/modules/occurence/hooks/useCreateOccurence.hook'
import { useI18n } from 'vue-i18n'
import { isAfter } from 'date-fns'

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
    const { occurences, ready } = useQueryOccurenceList(props.id)
    const { createOccurence } = useCreateOccurence(props.id ?? '')
    const { removeOccurence } = useRemoveOccurence(props.id)
    const maxDate = new Date()
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
      ready,
      occurences,
      calendarAttributes,
      removeOccurence,
      maxDate,
      createOccurence: ({ id }: { id: string }) => {
        const selectedDate = new Date(id)

        if (isAfter(selectedDate, new Date())) {
          return
        }

        createOccurence(new Date(id))
      }
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
