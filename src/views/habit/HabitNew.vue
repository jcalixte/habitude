<template>
  <section class="habit-new">
    <h1 class="title is-1">{{ t('habit.new.form-title') }}</h1>
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
