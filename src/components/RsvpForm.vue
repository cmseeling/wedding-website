<template>
  <div>
    <div class="stage1-name" v-if="showStage1">
      <div class="columns is-vcentered is-centered full-height">
        <div class="column is-half">
          <label class="label" for="stage1Name">Your name as it appears on the invitation:</label>
          <div class="level">
            <div class="level-left name-left">
              <input class="input" id="stage1Name" type="text" v-model="guestName" @keyup.enter="onNameSubmit"/>
            </div>
            <div class="level-right name-right">
              <button :class="`button is-link ${showLoader ? 'is-loading': ''}`" id="stage1ContinueButton" @click="onNameSubmit">Continue</button>
            </div>
          </div>
          <span class="has-text-danger" v-if="showNameNotFound">We couldn't find you. Please check your name.</span>
          <span class="has-text-black" v-if="showWrongSection">
            It looks like you were invited to a different date. Click <g-link :to="alternateLink">here</g-link> to go there.
          </span>
        </div>
      </div>
    </div>
    <div class="stage2-responses" v-if="showStage2">
      <div class="columns is-centered full-height">
        <div class="column is-half">
          <h2 class="has-text-centered">You have been invited to celebrate with us on August 8th, 2020</h2>
          <div class="tile is-ancestor is-vertical guest-list">
            <div class="tile is-parent is-12 is-vertical guest-tile" v-for="(guest, index) in guests" :key="guest.Id">
              <GuestEditTile v-model="guests[index]"/>
            </div>
            <div class="tile is-child">
              <button class="button is-link" @click="saveGroup">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LambdaAPI from '../api/LambdaAPI';
import { Guest } from '../models/Guest';
import GuestEditTile from './GuestEditTile.vue';

interface Data {
  showStage1: boolean,
  guestName: string,
  showLoader: boolean,
  showNameNotFound: boolean,
  showWrongSection: boolean,
  alternateLink: string,

  showStage2: boolean,
  guests: Guest[]
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
  async mounted() {
    const queryParams = window.location.href.split('?')[1];
    if (queryParams) {
      const groupId = queryParams.split('=')[1];
      if (groupId) {
        console.log(`fetching group ${groupId}`);
        const guests = await LambdaAPI.getGroupById(groupId);
        this.showStage1 = false;
        this.showStage2 = true;
        this.guests = guests;
        console.log(this.guests);
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
        const guest = guests[0]
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
