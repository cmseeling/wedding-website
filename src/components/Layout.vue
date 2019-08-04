<template>
  <v-content :class="`${$route.params.guestType}-main-content`">
    <v-container fill-height>
      <v-layout column>
        <v-flex shrink>
          <v-container text-center>
            <v-layout row align-center>
              <v-flex v-for="link in navLinks" :key="link.id">
                <router-link :to="link.path" :class="`header-link ${textColor}`">{{link.name}}</router-link>
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
        { id: 4, name: 'R.S.V.P.', path: `/${this.$route.params.guestType}/rsvp` },
        { id: 5, name: 'FAQs', path: `/${this.$route.params.guestType}/faqs` },
      ]
    };
  },
  computed: {
    textColor() {
      if (this.$route.params.guestType.toLowerCase() === 'family') {
        return 'indigo--text darken-4';
      } else {
        // return 'red--text accent-4';
        return 'blue-grey--text darken-4';
      }
    }
  }
});
</script>

<style>
  .friends-main-content {
    background: rgb(0,0,128);
    background: linear-gradient(330deg, rgba(0,0,128,1) 2%, rgba(173,216,230,1) 40%);
  }

  .family-main-content {
    background: rgb(0,0,128);
    background: linear-gradient(30deg, rgba(0,0,128,1) 2%, rgba(173,216,230,1) 40%);
  }

  .header-link {
    font-family: 'Courgette', cursive;
    font-size: 1.5rem;
  }
</style>
