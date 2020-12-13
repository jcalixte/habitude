<template>
  <div class="habit-details" v-if="habit">
    <HabitInfo :habit="habit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useQueryHabit } from '@/modules/habit/hooks/useQueryHabit.hook'
import HabitInfo from '@/modules/habit/components/HabitInfo/HabitInfo.vue'

export default defineComponent({
  name: 'HabitDetails',
  components: { HabitInfo },
  props: {
    id: { type: String, required: true }
  },
  setup(props) {
    const { habit } = useQueryHabit(props.id)

    return {
      habit
    }
  }
})
</script>

<style lang="scss" scoped>
.habit-details {
}
</style>
