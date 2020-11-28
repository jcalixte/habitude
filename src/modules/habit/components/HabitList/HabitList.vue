<template>
  <section class="habit-list">
    <HabitListItem v-for="habit in habits" :habit="habit" :key="habit._id" />
  </section>
</template>

<script lang="ts">
import { useHabitList } from './useHabitList.hook'
import HabitListItem from '@/modules/habit/components/HabitListItem/HabitListItem.vue'

export default {
  name: 'HabitList',
  components: {
    HabitListItem
  },
  setup() {
    const { habits } = useHabitList()

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
