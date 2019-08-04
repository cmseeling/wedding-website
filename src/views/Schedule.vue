<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex shrink>
          <v-layout column class="info-text-container">
            <v-flex ma-5 text-left>
              <p class="info-text">We will be at Bryant Lake Regional Park pavilion, which is located in Eden Prairie, a suburb of Minneapolis.</p>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex/>
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
  }
});
</script>

<style scoped>
  .info-text-container {
    border: 1px black solid;
    background-color: rgba(255,255,255,0.6);
  }

  .info-text {
    /* font-family: serif;
    font-size: 1.25rem; */
    font-family: 'Montserrat', sans-serif;
  }
</style>

