<template>
  <section class="habit-list">
    <HabitListItem v-for="habit in habits" :key="habit._id">
      {{ habit }}
    </HabitListItem>
  </section>
</template>

<script lang="ts">
import { useHabitList } from './useHabitList'
import HabitListItem from '@/modules/habit/components/HabitListItem/HabitListItem.vue'

export default {
  name: 'HabitList',
  components: {
    HabitListItem
  },
  async setup() {
    const { habits } = await useHabitList()

    return {
      habits
    }
  }
}
</script>

<style scoped lang="scss">
.habit-list {
}
</style>
