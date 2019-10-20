<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex ma-5 text-left class="info-text">
              <h2>Hotel</h2>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    We have reserved a hotel block Friday and Saturday night at the Embassy Suites by Hilton Minneapolis Airport.
                    The address is 7901 34th Avenue S., Bloomington, MN 55425. To reserve a room in the hotel block, click <a :href="hotelUrl">here</a>
                    or call 952-854-1000 or 1-800-Embassy, and let them know you need to make a reservation in the Key/Seeling {{groupCodeText}}.
                    The rooms are available for block rate until July 17, 2020.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex ma-5 text-left class="info-text">
              <h2>Travel</h2>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    If you are flying in, you will want to use MSP airport.
                    The hotel runs shuttles to the airport, and it is also directly located on the light rail line that runs through the airport (the Blue Line).
                    See the FAQ for information on taking the light rail.
                  </p>
                  <p>
                    We will be providing a shuttle from the hotel to the wedding venue, leaving at 1:00 and returning at 6:00 and 8:00 the day of the wedding.
                    Please note on your RSVP if you plan to use the shuttle. If you want to sight-see, many attractions in Minneapolis are also located along the same
                    light rail line as the hotel and airport. Lyft and Uber are also available. If you want more flexibility in terms of arrival/departure from the wedding,
                    or if you want to do a lot of suburban sightseeing, you may want to rent a car. See the FAQs page for more information about the light rail.
                  </p>
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
    isFamily() {
      return this.$route.params.guestType.toLowerCase() === 'family';
    },
    hotelUrl() {
      if (this.isFamily) {
        return 'http://group.embassysuites.com/KeySeelingFamily';
      } else {
        return 'http://group.embassysuites.com/KeySeelingFriends';
      }
    },
    groupCodeText() {
      if (this.isFamily) {
        return 'Family block, group code KSF';
      } else {
        return 'Friends block, group code KSR';
      }
    }
  }
});
</script>

