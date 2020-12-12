<template>
  <form @submit.prevent="submit" class="habit-form">
    <div class="field">
      <label for="name" class="label">{{ t('habit.name') }}</label>
      <div class="control">
        <input
          name="name"
          id="name"
          class="input"
          type="text"
          v-model="habit.name"
        />
      </div>
    </div>

    <div class="field">
      <label for="habit-type" class="label">Type d'habitude</label>
      <div class="control">
        <div class="select">
          <select name="habit-type" id="habit-type" v-model="habit.habitType">
            <option value="improve">Améliorer</option>
            <option value="diminish">Diminuer</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label for="periodicity" class="label">Périodicité</label>
      <div class="control">
        <div class="select">
          <select
            name="periodicity"
            id="periodicity"
            v-model="habit.periodicity"
          >
            <option value="daily">Quotidienne</option>
            <option value="weekly">Hebdomadaire</option>
            <option value="monthly">Mensuelle</option>
            <option value="yearly">Annuelle</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label for="goal" class="label">Objectif</label>
      <div class="control">
        <input
          name="goal"
          id="goal"
          type="number"
          class="input"
          v-model="habit.goal"
        />
      </div>
    </div>

    <button class="button" type="submit">Créer</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHabitForm } from './useHabitForm.hook'
import { useCreateHabit } from '@/modules/habit/hooks/useCreateHabit.hook'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HabitForm',
  setup() {
    const { t } = useI18n()
    const { push } = useRouter()
    const { habit } = useHabitForm()
    const { createHabit } = useCreateHabit()

    const submit = async () => {
      if (await createHabit(habit)) {
        push({
          name: 'Home'
        })
      }
    }

    return {
      t,
      habit,
      submit
    }
  }
})
</script>

<style lang="scss" scoped>
.habit-form {
  text-align: left;
}
</style>
