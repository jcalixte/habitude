<template>
  <section class="habit-new">
    {{ t('habit.new.form-title') }}
  </section>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
export default {
  name: 'HabitNew',
  setup() {
    const { t } = useI18n()

    return {
      t
    }
  }
}
</script>

<style scoped lang="scss">
.habit-new {
}
</style>
