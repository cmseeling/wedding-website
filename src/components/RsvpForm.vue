<template>
  <v-container fill-height text-center>
    <v-layout row wrap align-center v-if="showStage1">
      <v-flex/>
      <v-flex text-left mx-2>
        <label class="label" for="stage1Name">Your name as it appears on the invitation:</label>
        <v-container>
          <v-layout row>
            <v-flex>
              <v-text-field
                v-model="guestName" @keyup.enter="onNameSubmit" id="stage1Name"
                single-line
                outlined/>
            </v-flex>
            <v-flex ml-2 mt-2>
              <v-btn :loading="showLoader" :disabled="showLoader" id="stage1ContinueButton" @click="onNameSubmit">Continue</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
        <span class="has-text-danger" v-if="showNameNotFound">We couldn't find you. Please check your name.</span>
        <span class="has-text-black text-center" v-if="showWrongSection">
          It looks like you were invited to a different date. Click <router-link :to="alternateLink">here</router-link> to go there.
        </span>
      </v-flex>
      <v-flex/>
    </v-layout>
    <v-layout column v-if="showStage2">
      <v-flex shrink>You have been invited to celebrate with us on August 8th, 2020</v-flex>
      <v-flex v-for="(guest, index) in guests" :key="guest.Id" shrink>
        <v-container>
          <v-layout row>
            <v-flex md4 offset-md4>
              <GuestEditTile v-model="guests[index]"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex>
        <v-btn @click="saveGroup">Submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import LambdaAPI from '../api/LambdaAPI';
import { Guest } from '../models/Guest';
import GuestEditTile from './GuestEditTile.vue';

interface Data {
  showStage1: boolean;
  guestName: string;
  showLoader: boolean;
  showNameNotFound: boolean;
  showWrongSection: boolean;
  alternateLink: string;

  showStage2: boolean;
  guests: Guest[];
}

export default Vue.extend({
  name: 'RsvpForm',
  components: {
    GuestEditTile
  },
  props: {
    section: String
  },
  data: (): Data => {
    return {
      showStage1: true,
      guestName: '',
      showLoader: false,
      showNameNotFound: false,
      showWrongSection: false,
      alternateLink: '',

      showStage2: false,
      guests: []
    };
  },
  watch: {
    '$route.query.gid': {
      immediate: true,
      async handler(newId, oldId) {
        if(newId) {
          console.log(`fetching group ${newId}`);
          const guests = await LambdaAPI.getGroupById(newId);
          this.showStage1 = false;
          this.showStage2 = true;
          this.guests = guests;
          console.log(this.guests);
        }
      }
    }
  },
  methods: {
    async onNameSubmit() {
      this.resetStage1Form();

      this.showLoader = true;
      console.log(this.guestName);
      const firstName = this.guestName.slice(0, this.guestName.lastIndexOf(' '));
      const lastName = this.guestName.slice(this.guestName.lastIndexOf(' ') + 1, this.guestName.length);
      console.log(firstName);
      console.log(lastName);

      const guests = await LambdaAPI.getGroupByGuestName(firstName, lastName);
      console.log(this.guests);
      if (guests.length > 0) {
        const guest = guests[0];
        if (guest.GuestType.toLowerCase() !== this.section.toLowerCase()) {
          this.showWrongSection = true;
          this.alternateLink = `/${guest.GuestType.toLowerCase()}/rsvp?gid=${guest.GroupId}`;
        } else {
          this.showStage1 = false;
          this.showStage2 = true;
          this.guests = guests;
        }
      } else {
        this.showNameNotFound = true;
      }

      this.showLoader = false;
    },

    resetStage1Form() {
      this.showNameNotFound = false;
      this.showWrongSection = false;
    },

    async saveGroup() {
      console.log(this.guests);
      await LambdaAPI.saveRsvps(this.guests);
    }
  }
});
</script>


<style scoped>

  .full-height {
    height: 100vh;
  }

  #stage1Loader {
    margin-top: 0.5rem;
  }

  .name-left {
    width: 80%;
  }

  .name-right {
    width: 20%;
  }

  .guest-list {
    margin-top: 0.5rem;
  }

  .guest-tile {
    border: 1px black solid;
    background-color: white;
  }
</style>
