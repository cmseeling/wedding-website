<template>
  <v-container text-center>
    <v-layout row>
      <v-flex/>
      <v-flex md6>
        <v-layout column class="info-text-container">
          <v-flex ma-5 text-left class="info-text" v-if="showStage1">
            <v-card>
              <v-card-title></v-card-title>
              <v-card-text class="subtitle-1">
                <label class="label" for="stage1Name">Please enter the name of one person in your party:</label>
                <v-container>
                  <v-layout row>
                    <v-flex>
                      <v-text-field class="name-input"
                        v-model="guestName" @keyup.enter="onNameSubmit" id="stage1Name"
                        single-line
                        hide-details
                        outlined/>
                    </v-flex>
                    <v-flex ml-2 mt-2>
                      <v-btn :loading="showGroupLoader" :disabled="showGroupLoader" id="stage1ContinueButton" @click="onNameSubmit">Continue</v-btn>
                    </v-flex>
                  </v-layout>
                  <v-layout column>
                    <v-flex class="seprow">
                      <span class="has-text-danger" v-if="showFormatError">Please enter your first and last names.</span>
                      <span class="has-text-danger" v-if="showNameNotFound">We couldn't find you. Please check your name.</span>
                      <span class="has-text-black text-center" v-if="showWrongSection">
                        It looks like you were invited to a different date. Click <router-link :to="alternateLink">here</router-link> to go there.
                      </span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex ma-5 text-left class="info-text" v-if="showStage2">
            <h2>We invite you to celebrate with us on {{date}}</h2>
            <v-card>
              <v-card-title>
                Invitation for {{group.Addressees[0]}} and {{group.Addressees[1]}}
              </v-card-title>
              <v-card-text class="subtitle-1">
                <p>Will anyone from your party be attending?</p>
                <v-btn @click="onAcceptClick">Yes</v-btn>
                <v-btn class="decline-button" @click="onDeclineClick">No</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex ma-5 text-left class="info-text" v-if="showDecline">
            <v-card>
              <v-card-title></v-card-title>
              <v-card-text class="subtitle-1">
                <p>We're sorry you can't make it. We hope to see you sometime soon!</p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex ma-5 text-left class="info-text" v-if="showAccept">
            <h2>We invite you to celebrate with us on {{date}}</h2>
            <v-card>
              <v-card-title>
                Invitation for {{group.Addressees[0]}} and {{group.Addressees[1]}}
              </v-card-title>
              <v-card-text class="subtitle-1">
                <p>Our dinner will include a vegetarian option. Please let us know if you have other dietary restrictions.</p>
                <p>
                  We have reserved a room at the hotel for us to gather for brunch on Sunday.  If you are not staying at the hotel and would like to join us for brunch,
                   just let us know so we can make arrangements!
                </p>
                <p>
                  There will be a shuttle running to and from the hotel and park. You may register for it even if you are local or are staying at a different hotel.
                </p>
                <v-flex text-left v-for="(reservation, index) in group.Attendees" :key="index" shrink>
                  <v-container>
                    <v-layout row>
                      <v-flex md5>
                        <label class="label" :for="`attendeeName${index}`">Name:</label>
                        <v-container>
                          <v-layout row>
                            <v-flex>
                              <v-text-field class="name-input"
                                v-model="reservation.Name" :id="`attendeeName${index}`"
                                single-line
                                hide-details
                                outlined/>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                      <v-flex md6 offset-md1>
                        <label class="label" :for="`dietaryRestrictions${index}`">Dietary Restrictions:</label>
                        <v-container>
                          <v-layout row>
                            <v-flex>
                              <v-text-field class="name-input"
                                v-model="reservation.DietaryRestrictions" :id="`dietaryRestrictions${index}`"
                                single-line
                                hide-details
                                outlined/>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex md2>
                        <label class="label" :for="`brunch${index}`">Sunday Brunch</label>
                        <v-switch inset v-model="reservation.Brunch" :id="`brunch${index}`" :label="reservation.Brunch ? 'Yes' : 'No'"/>
                      </v-flex>
                      <v-flex md2 offset-md1>
                        <label class="label" :for="`hotel${index}`">Hotel Block</label>
                        <v-switch inset v-model="reservation.Hotel" :id="`hotel${index}`" :label="reservation.Hotel ? 'Yes' : 'No'"/>
                      </v-flex>
                      <v-flex md3 offset-md1>
                        <label class="label" :for="`shuttle${index}`">Shuttle From Hotel</label>
                        <v-switch inset v-model="reservation.Shuttle" :id="`shuttle${index}`" :label="reservation.Shuttle ? 'Yes' : 'No'"/>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                        <v-btn @click="removeGuestRow(index)"><i class="fas fa-minus-circle"></i>&nbsp;Remove Guest</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  <hr/>
                </v-flex>
                <v-flex shrink text-left class="seprow">
                  <v-btn @click="addGuestRow" color="success"><i class="fas fa-plus-circle"></i>&nbsp;Add Guest</v-btn>
                </v-flex>
                <v-flex v-if="showSaveSuccessMessage" class="seprow">
                  <div class="success-text">Your responses have been saved. Thank you!</div>
                </v-flex>
                <v-flex class="seprow">
                  <v-btn color="info" :loading="showGroupLoader" :disabled="showGroupLoader" @click="saveGroup">Submit</v-btn>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import LambdaAPI from '../api/LambdaAPI';
import { Guest } from '../models/Guest';
import Layout from '@/components/Layout.vue';

interface Data {
  showStage1: boolean;
  guestName: string;
  showGroupLoader: boolean;
  showFormatError: boolean;
  showNameNotFound: boolean;
  showWrongSection: boolean;
  alternateLink: string;
  showDecline: boolean;
  showAccept: boolean;
  showStage2: boolean;
  group: any;
  showSaveLoader: boolean;
  showSaveSuccessMessage: boolean;
}

interface Reservation {
  Name: string;
  Brunch: boolean;
  Hotel: boolean;
  Shuttle: boolean;
  DietaryRestrictions: string;
}

export default Vue.extend({
  name: 'RsvpForm',
  components: {

  },
  props: {
    section: String
  },
  data: (): Data => {
    return {
      showStage1: true,
      guestName: '',
      showGroupLoader: false,
      showFormatError: false,
      showNameNotFound: false,
      showWrongSection: false,
      alternateLink: '',
      showStage2: false,
      showDecline: false,
      showAccept: false,
      group: {
        Id: undefined,
        GuestType: '',
        GroupId: undefined,
        Addressees: [] as string[],
        Attendees: [] as Reservation[],
        DietaryNeeds: ''
      },
      showSaveLoader: false,
      showSaveSuccessMessage: false
    };
  },
  computed: {
    date() {
      if (this.$route.params.guestType.toLowerCase() === 'family') {
        return 'August 7, 2021';
      } else {
        return 'August 14, 2021';
      }
    }
  },
  watch: {
    '$route.query.gid': {
      immediate: true,
      async handler(newId, oldId) {
        this.resetStage1Form();
        this.resetStage2Form();
        if (newId) {
          // console.log(`fetching group ${newId}`);
          const guests = await LambdaAPI.getGroupById(newId);
          this.showStage1 = false;
          this.showStage2 = true;
          // this.guests = guests;
          // console.log(this.guests);
        }
      }
    }
  },
  methods: {
    async onNameSubmit() {
      this.resetStage1Form();

      this.showGroupLoader = true;
      // console.log(this.guestName);
      if (this.guestName.length === 0 || this.guestName.indexOf(' ') === -1) {
        this.showFormatError = true;
      } else {
        const firstName = this.guestName.slice(0, this.guestName.lastIndexOf(' '));
        const lastName = this.guestName.slice(this.guestName.lastIndexOf(' ') + 1, this.guestName.length);
        // console.log(firstName);
        // console.log(lastName);

        // const guests = await LambdaAPI.getGroupByGuestName(firstName, lastName);
        const group = {
          Id: 1,
          GuestType: 'Family',
          GroupId: 1,
          Addressees: ['Pete Seeling', 'Tina Seeling'],
          Attendees: [
            {
              Name: 'Pete Seeling',
              Brunch: false,
              Hotel: false,
              Shuttle: false,
              DietaryRestrictions: ''
            },
            {
              Name: 'Tina Seeling',
              Brunch: false,
              Hotel: false,
              Shuttle: false,
              DietaryRestrictions: ''
            }
          ] as Reservation[],
          DietaryNeeds: ''
        };

        // console.log(guests);
        // if (guests.length > 0) {
        //   const guest = guests[0];
        //   if (guest.GuestType.toLowerCase() !== this.section.toLowerCase()) {
        //     this.showWrongSection = true;
        //     this.alternateLink = `/${guest.GuestType.toLowerCase()}/rsvp?gid=${guest.GroupId}`;
        //   } else {
        //     this.showStage1 = false;
        //     this.showStage2 = true;
        //     this.guests = guests;
        //   }
        // } else {
        //   this.showNameNotFound = true;
        // }

        console.log(group);
        if (group && group.Addressees.length > 0) {
          if (group.GuestType.toLowerCase() !== this.section.toLowerCase()) {
            this.showWrongSection = true;
            this.alternateLink = `/${group.GuestType.toLowerCase()}/rsvp?gid=${group.GroupId}`;
          } else {
            this.showStage1 = false;
            this.showStage2 = true;
            this.group = group;
          }
        } else {
          this.showNameNotFound = true;
        }
      }

      this.showGroupLoader = false;
    },

    onAcceptClick() {
      this.showStage2 = false;

      if(this.group.Attendees.length === 0) {
        this.group.Attendees.push({Name: this.guestName, DietaryRestrictions: ''});
      }

      this.showAccept = true;
    },

    onDeclineClick() {
      this.showStage2 = false;
      this.showDecline = true;
    },

    resetStage1Form() {
      this.showFormatError = false;
      this.showNameNotFound = false;
      this.showWrongSection = false;
      this.alternateLink = '';
    },

    resetStage2Form() {
      this.showStage1 = true;
      this.showStage2 = false;
      this.group = {
        Id: undefined,
        GuestType: '',
        GroupId: undefined,
        Addressees: [] as string[],
        Attendees: [] as Reservation[],
        DietaryNeeds: ''
      };
      this.showSaveSuccessMessage = false;
    },

    addGuestRow() {
      this.group.Attendees.push({Name: '', DietaryRestrictions: ''});
    },

    removeGuestRow(index: number) {
      this.group.Attendees.splice(index, 1);
    },

    async saveGroup() {
      // console.log(this.guests);
      this.showSaveLoader = true;
      // await LambdaAPI.saveRsvps(this.guests);
      this.showSaveLoader = false;
      this.showSaveSuccessMessage = true;
    }
  }
});
</script>

<style scoped>
  .decline-button {
    margin-left: 1em;
  }

  .input-section {
    margin-top: 2em;
  }

  .seprow {
    margin-top: 1em;
  }

  .fa-minus-circle {
    color: red;
  }

  .has-text-danger {
    color: red;
  }
</style>
