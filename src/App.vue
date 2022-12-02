<script setup lang="ts">
import { events, fetchEvents } from "./lib/events";
import Event from "./components/Event.vue";

fetchEvents();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid";
</script>

<template>
  <div v-if="events.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <article v-else :class="containerClass">
    <Event />
  </article>
</template>
