<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex class="large-image">
              <v-img src="/images/pavilion.jpg"/>
            </v-flex>
            <v-flex ma-5 text-left class="info-text">
              <h2>Venue</h2>
              <v-card>
                <!-- <v-card-title>
                  Location
                </v-card-title> -->
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>We will be at Cleary Lake Regional Park pavilion, which is located in Prior Lake, a suburb of Minneapolis.</p>
                  <p>The park address is <strong>18106 Texas Ave, Prior Lake, MN 55372</strong>.  The park website is <a href="https://www.threeriversparks.org/location/cleary-lake-regional-park">here.</a></p>
                  <!-- <p>We may play this by ear a little to take advantage of/avoid the weather, but here’s the general plan:</p> -->
                  <!-- <strong>Schedule information coming soon!</strong> -->
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex ma-5 text-left class="info-text">
              <h2>Schedule</h2>
              <v-card>
                <v-card-title>{{saturday}}</v-card-title>
                <v-card-text class="subtitle-1">
                  <p>We are planning on starting the reception in the early afternoon.</p>
                  <p>More details coming soon!</p>
                </v-card-text>
              </v-card>
              <!-- <v-card>
                <v-card-title>
                  {{saturday}}
                </v-card-title>
                <v-card-text>
                  <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            <span class="time-text">1:00 - 1:30</span>
                          </v-flex>
                          <v-flex md10>
                            Arrival
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            <span class="time-text">1:30 - 2:00</span>
                          </v-flex>
                          <v-flex md10>
                            Welcome, speeches, etc.
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            <span class="time-text">2:00 - 4:30</span>
                          </v-flex>
                          <v-flex md10>
                            Eat snacks!  Enjoy the park!  (Or stay indoors and play board games and speculate about when the rain will stop.)
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            <span class="time-text">4:30 - 5:30</span>
                          </v-flex>
                          <v-flex md10>
                            Dinner
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-flex md2 xs12>
                            <span class="time-text">5:30 - 8:00</span>
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
                            <span class="time-text">9:00 - 11:00</span>
                          </v-flex>
                          <v-flex md10>
                            Breakfast at the hotel
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                </v-card-text>
              </v-card> -->
            </v-flex>
            <v-flex class="large-image">
              <v-img src="/images/deck_view.jpg"/>
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
  .time-text {
    font-weight: bold;
  }

  .large-image {
    margin: 20px;
  }
</style>

