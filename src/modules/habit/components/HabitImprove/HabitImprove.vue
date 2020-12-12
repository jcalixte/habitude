<template>
  <div class="habit-improve">
    <div class="progression" :style="progressStyle"></div>
    <div class="text">
      <span class="habit-name">{{ habit.name }}</span>
      <span class="habit-goal">{{ habit.goal }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Habit } from '@/data/models/Habit'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'HabitImprove',
  props: {
    habit: {
      type: Object as PropType<Habit>,
      required: true
    },
    occurences: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const percentage = computed(() => {
      const ratio = props.occurences / props.habit.goal
      return Math.min(100, ratio * 100)
    })

    const progressStyle = computed(() => ({
      width: `${percentage.value}%`
    }))

    return {
      progressStyle
    }
  }
})
</script>

<style lang="scss" scoped>
$radius: 1rem;

.habit-improve {
  position: relative;
  background-color: #dfe4ea;

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
    background-color: #70a1ff;
    transition: width 0.3s ease-out;
  }
}
</style>
