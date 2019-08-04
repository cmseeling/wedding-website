<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex ma-5 text-left class="info-text">
              <v-layout row></v-layout>
              <v-list class="faq-list">
                <v-list-item class="faq-item">
                  <v-list-item-content>
                    <v-flex md1 xs1 text-center>
                      <span class="time-text">Q:</span>
                    </v-flex>
                    <v-flex md10>
                      What is this event actually?
                    </v-flex>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="faq-item">
                  <v-list-item-content>
                    <v-flex md1 xs1 text-center>
                      <span class="time-text">A:</span>
                    </v-flex>
                    <v-flex md10>
                      This is a celebration of our wedding with our family/friends. We will be getting legally married ahead of time at the courthouse with our parents in attendance.
                    </v-flex>
                  </v-list-item-content>
                </v-list-item>
                <v-divider/>
                <v-list-item class="faq-item">
                  <v-list-item-content>
                    <v-flex md1 xs1 text-center>
                      <span class="time-text">Q:</span>
                    </v-flex>
                    <v-flex md10>
                      What should I wear?
                    </v-flex>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="faq-item">
                  <v-list-item-content>
                    <v-flex md1 xs1 text-center>
                      <span class="time-text">A:</span>
                    </v-flex>
                    <v-flex md10>
                      Please dress for the weather! The pavilion is an enclosed building, but it does not have AC, and we are hoping to take advantage of the park. 
                      The atmosphere we are going for here is Festive Picnic, so this is going to be on the casual side.
                    </v-flex>
                  </v-list-item-content>
                </v-list-item>
                <v-divider/>
                <v-list-item class="faq-item">
                  <v-list-item-content>
                    <v-flex md1 xs1 text-center>
                      <span class="time-text">Q:</span>
                    </v-flex>
                    <v-flex md10>
                      How did you guys meet?
                    </v-flex>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="faq-item">
                  <v-list-item-content>
                    <v-flex md1 xs1 text-center>
                      <span class="time-text">A:</span>
                    </v-flex>
                    <v-flex md10>
                      This is a celebration of our wedding with our family/friends. We will be getting legally married ahead of time at the courthouse 
                      with our parents in attendance.
                    </v-flex>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
  .faq-list {
    background-color: transparent;
  }
</style>

