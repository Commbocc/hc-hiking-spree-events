<script setup lang="ts">
import { events } from "../lib/events";
</script>

<template>
  <p v-if="!events.data.length">There are currently no events scheduled.</p>

  <div v-else class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Date</th>
          <th>Location</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <template v-for="(event, i) in events.data" :key="i">
          <tr v-if="event.fields.Published">
            <td v-if="event.fields.Name">{{ event.fields.Name }}</td>

            <td v-if="event.fields.DateTime">
              {{ new Date(event.fields.DateTime).toLocaleDateString("en-US") }},
              {{
                new Date(event.fields.DateTime).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })
              }}
            </td>

            <td v-if="event.fields.LocationUrl">
              <a :href="`${event.fields.LocationUrl[0]}`">{{
                event.fields.LocationName[0]
              }}</a>
            </td>

            <td v-if="event.fields.Link">
              <a class="btn btn-primary" :href="`${event.fields.Link}`"
                >Info & Registration</a
              >
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
