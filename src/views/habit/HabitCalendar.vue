<template>
  <div class="habit-calendar columns no-margin is-centered is-multiline">
    <div class="column" v-for="habit in habits" :key="habit._id">
      <HabitInfo :habit="habit" />
    </div>
  </div>
</template>

<script lang="ts">
import { useQueryHabitList } from '@/modules/habit/hooks/useQueryHabitList.hook'
import { defineComponent } from 'vue'
import HabitInfo from '@/modules/habit/components/HabitInfo/HabitInfo.vue'

export default defineComponent({
  components: { HabitInfo },
  name: 'HabitCalendar',
  setup() {
    const { habits } = useQueryHabitList()

    return {
      habits
    }
  }
})
</script>

<style lang="scss" scoped>
.habit-calendar {
}
</style>
