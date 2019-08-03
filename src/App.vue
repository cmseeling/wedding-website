<template>
  <v-app>
    <v-content>
      <v-container text-center>
        <v-layout row align-center>
          <v-flex v-for="link in navLinks" :key="link.id">
            <router-link :to="link.path">{{link.name}}</router-link>
          </v-flex>
        </v-layout>
      </v-container>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      navLinks: [
        { id: 1, name: 'Home', path: `/${this.$route.params.guestType}` },
        { id: 2, name: 'Schedule', path: `/${this.$route.params.guestType}/schedule` },
        { id: 3, name: 'Travel & Accommodation', path: `/${this.$route.params.guestType}/travelaccommodations` },
        { id: 4, name: 'RSVP', path: `/${this.$route.params.guestType}/rsvp` },
        { id: 5, name: 'FAQs', path: `/${this.$route.params.guestType}/faqs` },
      ]
    };
  }
});
</script>
