<template>
  <div class="home">
    <HabitList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HabitList from '@/modules/habit/components/HabitList/HabitList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HabitList
  }
})
</script>
