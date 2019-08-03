<template>
  <v-content :class="`${$route.params.guestType} main-content`">
    <v-container fill-height>
      <v-layout column>
        <v-flex shrink>
          <v-container text-center>
            <v-layout row align-center>
              <v-flex v-for="link in navLinks" :key="link.id">
                <router-link :to="link.path">{{link.name}}</router-link>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex>
          <slot/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Layout',
  data() {
    return {
      navLinks: [
        { id: 1, name: 'Home', path: `/${this.$route.params.guestType}` },
        { id: 2, name: 'Schedule', path: `/${this.$route.params.guestType}/schedule` },
        { id: 3, name: 'Travel & Accommodation', path: `/${this.$route.params.guestType}/accommodations` },
        { id: 4, name: 'RSVP', path: `/${this.$route.params.guestType}/rsvp` },
        { id: 5, name: 'FAQs', path: `/${this.$route.params.guestType}/faqs` },
      ]
    };
  }
});
</script>

<style>
  .main-content {
    background-color: lightblue;
  }
</style>
