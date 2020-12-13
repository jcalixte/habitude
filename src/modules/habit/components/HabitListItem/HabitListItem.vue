<template>
  <div
    class="habit-list-item"
    @click="createOccurence(new Date())"
    :style="itemStyle"
  >
    <div class="progression" :style="progressStyle"></div>
    <div class="text" :style="textStyle">
      <span class="habit-name">
        {{ habit.name }}
        <span v-if="isSuccess">🎉</span>
      </span>
      <span class="info numeric">
        <span class="habit-goal">{{ count }}</span>
        <router-link
          :to="{ name: 'HabitDetails', params: { id: habit._id ?? '' } }"
          class="button is-icon"
          @click.stop
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-dots-circle-horizontal"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#6f32be"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="8" y1="12" x2="8" y2="12.01" />
            <line x1="12" y1="12" x2="12" y2="12.01" />
            <line x1="16" y1="12" x2="16" y2="12.01" />
          </svg>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Habit } from '@/data/models/Habit'
import { computed, defineComponent, PropType } from 'vue'
import { useCreateOccurence } from '@/modules/occurence/hooks/useCreateOccurence.hook'
import { useRemoveOccurence } from '@/modules/occurence/hooks/useRemoveOccurence.hook'
import { useQueryOccurenceList } from '@/modules/occurence/hooks/useQueryOccurenceList.hook'
import seedrandom from 'seedrandom'
import { useInfoHabit } from '../../hooks/useInfoHabit.hook'

export default defineComponent({
  name: 'HabitListItem',
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
    const isSuccess = computed(() => {
      const { isSuccess } = useInfoHabit(props.habit, occurences)

      return isSuccess.value
    })

    const percentage = computed(() => {
      const ratio = occurences.value.length / props.habit.goal
      return Math.min(100, ratio * 100)
    })

    const progressStyle = computed(() => ({
      width: `${percentage.value}%`,
      'background-color': `hsl(${seedrandom(props.habit._id)() *
        360}, 70%, 80%)`
    }))

    const itemStyle = computed(() => ({
      'background-color': `hsl(${seedrandom(props.habit._id)() *
        360}, 70%, 96%)`
    }))

    const textStyle = computed(() => ({
      color: `hsl(${seedrandom(props.habit._id)() * 360}, 70%, 20%)`
    }))

    const count = computed(() =>
      Math.max(occurences.value.length, props.habit.goal)
    )

    return {
      progressStyle,
      itemStyle,
      textStyle,
      createOccurence,
      removeOccurence,
      occurences,
      isSuccess,
      count
    }
  }
})
</script>

<style scoped lang="scss">
.habit-list-item {
  position: relative;
  background-color: #f7f7f7;
  min-width: 300px;

  &:hover {
    cursor: pointer;
  }

  .text {
    position: relative;
    padding: 0.5rem 1rem;
    font-size: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .progression {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    transition: width 0.3s ease-out;
  }

  .info,
  .habit-name {
    display: flex;
    align-items: center;
  }
}
</style>
