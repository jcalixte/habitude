<template>
  <div class="home">
    <router-link :to="{ name: 'HabitNew' }" class="button is-primary"
      >create a new habit</router-link
    >
    <hr />
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
