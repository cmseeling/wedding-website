<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex ma-5 text-left class="info-text">
              <h2>Travel</h2>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    If you are flying in, the local airport will be MSP. 
                    There are two terminals, which are located one stop apart on the light rail (you can ride the light rail between them for free).
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex ma-5 text-left class="info-text">
              <h2>Hotel</h2>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    More information coming soon!
                  </p>
                  <!-- <p>
                    We have reserved a hotel block at the Hilton Garden Inn, about 0.7 miles from the wedding site and 17 minutes by vehicle from the airport. 
                    The address is 6330 Point Chase Rd, Eden Prairie, MN 55344. 
                    To reserve a room in the hotel block, call XXX and ask for the block under the name XXX.
                  </p>
                  <p>
                    Unfortunately, the hotel and venue are not in an area that is well served by public transit; if you are absolutely set on using transit, call Malka for extensive details. 
                    If you do not want to rent a car, MSP is well served by rideshare services (Lyft, etc.) as well as taxis; 
                    I have also had good luck with the shared shuttle service <a href="https://www.supershuttle.com/">SuperShuttle</a>.
                  </p> -->
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
  }
});
</script>

