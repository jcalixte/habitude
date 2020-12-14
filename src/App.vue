<template>
  <main>
    <router-view />
  </main>
  <nav>
    <router-link :to="{ name: 'HabitNew' }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-plus"
        width="45"
        height="45"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#42803d"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
    </router-link>

    <router-link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-list-check"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#42803d"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
        <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
        <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
        <line x1="11" y1="6" x2="20" y2="6" />
        <line x1="11" y1="12" x2="20" y2="12" />
        <line x1="11" y1="18" x2="20" y2="18" />
      </svg>
    </router-link>

    <router-link to="/habit/calendar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-calendar-event"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#42803d"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <line x1="16" y1="3" x2="16" y2="7" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="4" y1="11" x2="20" y2="11" />
        <rect x="8" y="15" width="2" height="2" />
      </svg>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
@import 'styles/app';

$link-size: 45px;

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  background-color: white;
  z-index: 2;
  height: 65px;

  a {
    width: $link-size;
    height: $link-size;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
