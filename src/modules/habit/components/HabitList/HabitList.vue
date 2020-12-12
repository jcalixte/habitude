<template>
  <section class="habit-list columns is-multiline">
    <HabitListItem
      v-for="habit in habits"
      :habit="habit"
      :key="habit._id"
      class="habit-list-item column is-8"
    />
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
  display: flex;
  flex-direction: column;
  align-items: center;

  .habit-list-item {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
