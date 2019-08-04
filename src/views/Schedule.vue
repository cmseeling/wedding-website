<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex shrink>
          <v-layout column class="info-text-container">
            <v-flex ma-5 text-left class="info-text">
              <p>We will be at Bryant Lake Regional Park pavilion, which is located in Eden Prairie, a suburb of Minneapolis.</p>
              <p>The park address is 6800 Rowland Rd, Eden Prairie, MN 55344.  The park website is <a href="https://www.threeriversparks.org/location/bryant-lake-regional-park">here.</a></p>
              <p>We may play this by ear a little to take advantage of/avoid the weather, but here’s the general plan:</p>
              <v-card>
                <v-card-title>
                  {{saturday}}
                </v-card-title>
                <v-card-text>
                  <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            1:00 - 1:30
                          </v-flex>
                          <v-flex md10>
                            Arrival
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            1:30 - 2:00
                          </v-flex>
                          <v-flex md10>
                            Welcome, speeches, etc.
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            2:00 - 4:30
                          </v-flex>
                          <v-flex md10>
                            Eat snacks!  Enjoy the park!  (Or stay indoors and play board games and speculate about when the rain will stop.)
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            4:30
                          </v-flex>
                          <v-flex md10>
                            Dinner
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            5:30 - 8:00
                          </v-flex>
                          <v-flex md10>
                            Board games and dessert (or enjoy the park, if it was raining earlier)
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                </v-card-text>
              </v-card>
              <v-card>
                <v-card-title>
                  {{sunday}}
                </v-card-title>
                <v-card-text>
                  <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            9:00 - 11:00
                          </v-flex>
                          <v-flex md10>
                            Breakfast at the hotel
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                </v-card-text>
              </v-card>
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
        return 'Saturday, August 8';
      } else {
        return 'Saturday August 15';
      }
    },
    sunday() {
      if (this.$route.params.guestType.toLowerCase() === 'family') {
        return 'Sunday, August 9';
      } else {
        return 'Sunday August 16';
      }
    }
  }
});
</script>

<style scoped>
  .info-text-container {
    border: 1px black solid;
    background-color: rgba(255,255,255,0.6);
  }

  .info-text {
    font-family: 'Montserrat', sans-serif;
  }
</style>

