<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex class="large-image">
              <v-img src="/images/ceremonypics/table.jpg"/>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/ChrisandMalka-229.jpg"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-147.jpg"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-235.jpg"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-210.jpg"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka3.jpg"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/ChrisandMalka3.jpg"/>
                </v-col>
              </v-row>
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
  },
  computed: {
    saturday() {
      if (this.$route.params.guestType.toLowerCase() === 'family') {
        return 'Saturday, August 7';
      } else {
        return 'Saturday August 14';
      }
    },
    sunday() {
      if (this.$route.params.guestType.toLowerCase() === 'family') {
        return 'Sunday, August 8';
      } else {
        return 'Sunday August 15';
      }
    }
  }
});
</script>

<style scoped>
  .time-text {
    font-weight: bold;
  }

  .large-image {
    margin: 20px;
  }
</style>

