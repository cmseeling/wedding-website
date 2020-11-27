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
                  <v-img src="/images/ceremonypics/ChrisandMalka-229.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-147.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-235.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-210.jpg" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/ChrisandMalka3.jpg" max-height="620" contain/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/balloons.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/cake.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/malka-computer.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/tshirts.jpg" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/camera1.jpg" max-height="620" contain/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/signing.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/camera2.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/ceremony_bw.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/ceremony1.jpg" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/chris_malka_judy.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-216.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-222.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/ChrisandMalka-226.jpg" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/cutting-cake.jpg" max-height="620" contain/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/ChrisandMalka-227.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/malkaandmom.jpg" class="row-img"/>
                  <v-img src="/images/ceremonypics/seelingfamily.jpg" class="row-img"/>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex ma-5>
              <v-row>
                <v-col class="d-flex child-flex">
                  <v-img src="/images/ceremonypics/zoomcall.jpg" max-height="620" contain/>
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

