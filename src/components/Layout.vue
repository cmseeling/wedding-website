<template>
  <v-content :class="`${$route.params.guestType}-main-content`">
    <v-container fill-height>
      <v-layout column>
        <v-flex shrink>
          <v-container text-center>
            <v-layout row align-center>
              <v-flex v-for="link in navLinks" :key="link.id">
                <router-link :to="link.path" :class="`header-link ${textColor}`" v-if="link.type == 0">{{link.name}}</router-link>
                <a :href="link.path" target="_blank" :class="`header-link ${textColor}`" v-else>{{link.name}}</a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex>
          <slot/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer class="grey--text lighten-5">
      <v-layout column text-center>
        <v-flex>
          <div class="info-text">
            Created by Chris. For help with the website or for other questions, contact Chris or Malka by email: 
            (<a href="mailto:cmseeling@gmail.com" class="blue-grey--text">cmseeling@gmail.com</a>, <a href="mailto:malka.key@gmail.com" class="blue-grey--text">malka.key@gmail.com</a>) 
            or by phone: (218-591-5354, 612-999-2571).
          </div>
          <div class="icon-attribution">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Layout',
  data() {
    return {
      navLinks: [
        { id: 1, type: 0, name: 'Home', path: `/${this.$route.params.guestType}` },
        { id: 2, type: 1, name: 'Pictures!', path: `https://photos.app.goo.gl/NNPK6Qc1J7j6UcQNA` },
        { id: 3, type: 0, name: 'Venue & Schedule', path: `/${this.$route.params.guestType}/schedule` },
        { id: 4, type: 0, name: 'Travel & Accommodation', path: `/${this.$route.params.guestType}/accommodations` },
        { id: 5, type: 0, name: 'R.S.V.P.', path: `/${this.$route.params.guestType}/rsvp` },
        { id: 6, type: 0, name: 'Registry', path: `/${this.$route.params.guestType}/registry` },
        { id: 7, type: 0, name: 'FAQs', path: `/${this.$route.params.guestType}/faqs` },
      ]
    };
  },
  computed: {
    textColor() {
      return 'blue-grey--text darken-4';
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

  h2 {
    font-family: 'Courgette', cursive;
  }

  .info-text-container {
    border: 1px black solid;
    background-color: rgba(255,255,255,0.6);
  }

  .info-text {
    font-family: 'Montserrat', sans-serif;
  }

  .icon-attribution {
    font-size: 0.5rem;
  }

  footer {
    background-color: navy !important;
  }
</style>
