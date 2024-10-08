<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex />
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex ma-5 text-left class="info-text">
              <h2>Hotel</h2>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    We have reserved a hotel block Friday and Saturday night at
                    the Embassy Suites by Hilton Minneapolis Airport. There are
                    two Embassy Suites in Bloomington, so make sure you are
                    going to the one east of the Mall of America. The address is
                    7901 34th Avenue S., Bloomington, MN 55425.
                  </p>
                  <p>
                    To reserve a room in the hotel block, click
                    <a :href="hotelUrl">here</a> or call 952-854-1000 or
                    1-800-Embassy, and let them know you need to make a
                    reservation in the Key/Seeling {{ groupCodeText }}.{{
                      reservationDeadline
                    }}
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
                    If you are flying in, you will want to use MSP airport. The
                    hotel runs shuttles to the airport, and it is also directly
                    located on the light rail line that runs through the airport
                    (the Blue Line). See the FAQ for information on taking the
                    light rail.
                  </p>
                  <p>
                    We will be providing a shuttle from the hotel to the
                    reception venue, leaving at 1:30pm and returning at 6:30pm
                    and 8:00pm. Please note on your RSVP if you plan to use the
                    shuttle. If you want to sight-see, many attractions in
                    Minneapolis are also located along the same light rail line
                    as the hotel and airport. Lyft and Uber are also available.
                    If you want more flexibility in terms of arrival/departure
                    from the reception, or if you want to do a lot of suburban
                    sightseeing, you may want to rent a car.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex ma-5 text-left class="info-text">
              <h2>Things to Do</h2>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    If you have some extra time, here are a few sightseeing
                    ideas located along the Blue Line (the light rail line that
                    stops at the hotel).
                  </p>
                  <ul>
                    <li v-for="(item, index) in todoList" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                  <br />
                  <p v-if="isFamily">
                    The Uptown Art Fair runs August 6-8. It is not directly on
                    the light rail, but there are many ways to connect by bus to
                    get there. It will also put you in the vicinity of Lake of
                    the Isles and Lake Bde Maka Ska.
                    <a
                      href="http://www.uptownminneapolis.com/events/57th-uptown-art-fair/"
                      >http://www.uptownminneapolis.com/events/57th-uptown-art-fair/</a
                    >
                  </p>
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
    isFamily() {
      return this.$route.params.guestType.toLowerCase() === "family";
    },
    hotelUrl() {
      if (this.isFamily) {
        return "https://embassysuites.hilton.com/en/es/groups/personalized/M/MSPAPES-SEE-20210803/index.jhtml?WT.mc_id=POG";
      } else {
        return "https://embassysuites.hilton.com/en/es/groups/personalized/M/MSPAPES-KEY-20210813/index.jhtml?WT.mc_id=POG";
      }
    },
    groupCodeText() {
      if (this.isFamily) {
        return "Family block, group code SEE";
      } else {
        return "Friends block, group code KEY";
      }
    },
    reservationDeadline() {
      if (this.isFamily) {
        return " The deadline to reserve a hotel in this block is July 16.";
      } else {
        return "";
      }
    },
    todoList() {
      let todoList = [
        "Mall of America Station: Mall of America",
        "50th St. Station: Minnehaha Falls",
        "46th St Station: Minnehaha Creek (exit the station and walk a block south)",
        "US Bank Stadium Station: 10 minute walk from the Stone Arch Bridge, Guthrie Theater, Mill City Farmers Market (Saturday mornings)",
      ];
      if (!this.isFamily) {
        todoList.push(
          "Target Field: Baseball stadium; Twins play the Rays on Sunday, August 15 at 1:10pm"
        );
      }

      return todoList;
    },
  },
});
</script>
