<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex />
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex class="large-image">
              <v-img src="/images/bryant_pavillon.jpg" />
            </v-flex>
            <v-flex ma-5 text-left class="info-text">
              <h2>Venue</h2>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    We will be at Bryant Lake Regional Park pavilion, which is
                    located in Eden Prairie, a suburb of Minneapolis.
                  </p>
                  <p>
                    The park address is
                    <strong>6800 Rowland Rd, Eden Prairie, MN 55344</strong>.
                    The park website is
                    <a
                      href="https://www.threeriversparks.org/location/bryant-lake-regional-park"
                      >here.</a
                    >
                  </p>
                  <p>
                    Note that this is a different park from what we had planned
                    on our original 2020 date.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex ma-5 text-left class="info-text">
              <h2>Schedule</h2>
              <v-card>
                <v-card-title>{{ saturday }}</v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    We are planning on starting the reception in the early
                    afternoon.
                  </p>
                </v-card-text>
              </v-card>
              <v-card>
                <v-card-title>
                  {{ saturday }}
                </v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">1:30</span>
                        </v-flex>
                        <v-flex md10>
                          Shuttle departs Embassy Suites for Bryant Lake
                          Regional Park
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">2:00</span>
                        </v-flex>
                        <v-flex md10>
                          Welcome, drinks and appetizers, pictures, enjoy the
                          park!
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">4:15</span>
                        </v-flex>
                        <v-flex md10>
                          Speeches
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">4:30</span>
                        </v-flex>
                        <v-flex md10>
                          Dinner
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">5:30</span>
                        </v-flex>
                        <v-flex md10>
                          Dessert, board games, and enjoy the park!
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">6:30</span>
                        </v-flex>
                        <v-flex md10>
                          First shuttle back to hotel
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">8:00</span>
                        </v-flex>
                        <v-flex md10>
                          Second (and final) shuttle back to hotel
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
              <v-card>
                <v-card-title>
                  {{ sunday }}
                </v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">7:30 - 9:30</span>
                        </v-flex>
                        <v-flex md10>
                          Breakfast served at the hotel
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-flex md2 xs12>
                          <span class="time-text">7:30 AM - 12:00</span>
                        </v-flex>
                        <v-flex md10>
                          Visiting in {{ room }} Conference room. Bring your
                          breakfast!
                        </v-flex>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex />
      </v-layout>
    </v-container>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Layout,
  },
  computed: {
    saturday() {
      if (this.$route.params.guestType.toLowerCase() === "family") {
        return "Saturday, August 7";
      } else {
        return "Saturday August 14";
      }
    },
    sunday() {
      if (this.$route.params.guestType.toLowerCase() === "family") {
        return "Sunday, August 8";
      } else {
        return "Sunday August 15";
      }
    },
    room() {
      if (this.$route.params.guestType.toLowerCase() === "family") {
        return "Nokomis";
      } else {
        return "Itasca";
      }
    },
  },
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
