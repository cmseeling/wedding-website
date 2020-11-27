<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex class="large-image">
              <v-img src="/images/ceremonypics_c/table.jpg"/>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/ChrisandMalka-229.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/ChrisandMalka-147.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/ChrisandMalka-235.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/ChrisandMalka-210.jpg" max-width="220" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/ChrisandMalka3.jpg" max-height="620" contain/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/balloons.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/cake.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/malka-computer.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/tshirts.jpg" max-width="220" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/camera1.jpg" max-height="620" contain/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/signing.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/camera2.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/ceremony_bw.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/ceremony1.jpg" max-width="220" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/chris_malka_judy.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/ChrisandMalka-216.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/ChrisandMalka-222.jpg" max-width="220" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/ChrisandMalka-226.jpg" max-width="220" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/cutting-cake.jpg" max-height="620" contain/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/ChrisandMalka-227.jpg" max-width="295" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/malkaandmom.jpg" max-width="295" class="row-img"/>
                  <v-img src="/images/ceremonypics_c/seelingfamily.jpg" max-width="295" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics_c/zoomcall.jpg" max-height="620" contain/>
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

  .row-img {
    margin: 4px;
  }
</style>

