<template>
  <Layout>
    <v-container text-center>
      <v-layout column>
        <v-flex>
          <!-- <h1 :class="headerClass">Welcome! Our wedding reception with our {{$route.params.guestType}} will be {{date}}.</h1> -->
          <h1 :class="headerClass">Welcome! More information coming soon.</h1>
        </v-flex>
        <v-flex v-if="$vuetify.breakpoint.mdAndUp" mt-3>
          <v-img src="/images/city_museum_cropped.jpg" aspect-ratio="3" contain/>
        </v-flex>
        <v-flex v-else mt-5>
          <v-img src="/images/city_museum_cropped.jpg" aspect-ratio="2" contain/>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    Layout
  },
  computed: {
    date() {
      if (this.$route.params.guestType.toLowerCase() === 'family') {
        return 'August 8, 2020';
      } else {
        return 'August 15, 2020';
      }
    },
    headerClass() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'desktop';
      } else {
        return 'mobile';
      }
    }
  }
});
</script>

<style scoped>
  img {
    image-orientation: from-image;
  }

  .desktop {
    font-family: 'Courgette', cursive;
    font-size: 3rem;
  }

  .mobile {
    font-family: 'Courgette', cursive;
    font-size: 2rem;
  }
</style>
