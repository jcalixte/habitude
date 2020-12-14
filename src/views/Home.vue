<template>
  <div class="home">
    <habit-list />
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

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 1rem;
}
</style>
