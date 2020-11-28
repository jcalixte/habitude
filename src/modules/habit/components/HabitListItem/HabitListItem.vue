<template>
  <div class="habit-list-item">{{ habit }}</div>
</template>

<script lang="ts">
import { Habit } from '@/data/models/Habit'
import { PropType } from 'vue'

export default {
  name: 'HabitListItem',
  props: {
    habit: { required: true, type: Object as PropType<Habit> }
  }
}
</script>

<style scoped lang="scss">
.habit-list-item {
}
</style>
