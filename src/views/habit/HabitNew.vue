<template>
  <section class="habit-new">
    <h1 class="title is-1">{{ t('habit.new.form-title') }}</h1>
    <habit-form class="habit-form" />
  </section>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import HabitForm from '@/modules/habit/components/HabitForm/HabitForm.vue'

export default {
  name: 'HabitNew',
  components: {
    HabitForm
  },
  setup() {
    const { t } = useI18n()

    return {
      t
    }
  }
}
</script>

<style scoped lang="scss">
$form-max-width: 760px;

.habit-new {
  display: flex;
  flex-direction: column;
  align-items: center;

  .habit-form {
    max-width: $form-max-width;
  }
}
</style>
