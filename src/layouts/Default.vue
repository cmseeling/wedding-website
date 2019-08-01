<template>
  <div class="layout container">
    <header class="header">
      <div class="columns nav">
        <div class="column" v-for="link in navLinks" :key="link.id">
          <g-link class="nav__link" :to="link.path">{{link.name}}</g-link>
        </div>
      </div>
    </header>
    <hr/>
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    section: String
  },
  data() {
    return {
      navLinks: [
        { id: 1, name: 'Home', path: `/${this.section}` },
        { id: 2, name: 'Schedule', path: `/${this.section}/schedule` },
        { id: 3, name: 'Travel & Accommodation', path: `/${this.section}/travelaccommodations` },
        { id: 4, name: 'RSVP', path: `/${this.section}/rsvp` },
        { id: 5, name: 'FAQs', path: `/${this.section}/faqs` },
      ]
    };
  }
});
</script>

