<template>
  <div class="habit-info">
    <h1 class="title is-1">
      <span v-if="isSuccess">🎉</span>
      {{ habit?.name }}
      <span v-if="isSuccess">🎉</span>
    </h1>
    <p>
      {{
        t('habit.details.totalOccurences', occurences.length, {
          named: { totalOccurences: occurences.length }
        })
      }}
    </p>
    <hr />
    <Calendar
      :attributes="calendarAttributes"
      @dayclick="createOccurence"
      :max-date="maxDate"
    />
    <hr />
    <div class="buttons is-centered">
      <button class="button is-danger" @click="removeOccurence">
        {{ t('occurence.removeLast') }}
      </button>
      <button class="button is-danger" @click="removeAndGoToHome">
        {{ t('habit.delete') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Habit } from '@/data/models/Habit'
import { Calendar } from 'v-calendar'
import { useQueryOccurenceList } from '@/modules/occurence/hooks/useQueryOccurenceList.hook'
import { useInfoHabit } from '@/modules/habit/hooks/useInfoHabit.hook'
import { useI18n } from 'vue-i18n'
import { useCreateOccurence } from '@/modules/occurence/hooks/useCreateOccurence.hook'
import { useRemoveOccurence } from '@/modules/occurence/hooks/useRemoveOccurence.hook'
import { useRemoveHabit } from '@/modules/habit/hooks/useRemoveHabit.hook'
import { isAfter } from 'date-fns'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HabitInfo',
  components: {
    Calendar
  },
  props: {
    habit: { type: Object as PropType<Habit>, required: true }
  },
  setup(props) {
    const router = useRouter()
    const { t } = useI18n()
    const { occurences, ready } = useQueryOccurenceList(props.habit._id ?? '')
    const { occurences: currentOccurences } = useQueryOccurenceList(
      props.habit._id ?? '',
      props.habit.periodicity
    )
    const { isSuccess } = useInfoHabit(props.habit, currentOccurences)
    const { createOccurence } = useCreateOccurence(props.habit._id ?? '')
    const { removeHabit } = useRemoveHabit(props.habit._id ?? '')
    const { removeOccurence } = useRemoveOccurence(props.habit._id ?? '')
    const maxDate = new Date()
    const calendarAttributes = computed(() => [
      {
        dot: true,
        dates: occurences.value.map(
          (occurence) => new Date(occurence.createdAt)
        )
      }
    ])

    const removeAndGoToHome = async () => {
      if (await removeHabit()) {
        router.push('/')
      }
    }

    return {
      t,
      ready,
      isSuccess,
      occurences,
      calendarAttributes,
      removeOccurence,
      removeAndGoToHome,
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
.habit-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
