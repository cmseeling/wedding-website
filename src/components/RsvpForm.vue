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
                <div>Invitation for {{group.Addressees[0]}} and {{group.Addressees[1]}}</div>
              </v-card-title>
              <v-card-text class="subtitle-1">
                <p><strong>Please remember that all guests, including children, must be fully vaccinated by the date of the reception.</strong></p>
                <p>Our dinner will include a vegetarian option. Please let us know if you have other dietary restrictions.</p>
                <p>
                  We have reserved a room at the hotel for us to gather for breakfast on Sunday.  If you are not staying at the hotel and would like to join us for breakfast,
                   just let us know so we can make arrangements!
                </p>
                <p>
                  There will be a shuttle/bus from the hotel to the park and back. Please indicate if you would like to use it.
                  It is available whether or not you are staying at the hotel.
                </p>
                <v-flex text-left v-for="(reservation, index) in group.Attendees" :key="index" shrink>
                  <v-container>
                    <v-layout row>
                      <v-flex md5>
                        <label class="label" :for="`attendeeName${index}`">First and Last Name:</label>
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
                        <label class="label" :for="`brunch${index}`">Sunday Breakfast</label>
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
                <v-flex class="seprow">
                  <div v-if="showSaveSuccessMessage"  class="success-text">Your responses have been saved. Thank you!</div>
                  <div v-if="showEmptyNamesError" class="has-text-danger">Please make sure a name has been entered for each guest.</div>
                  <div v-if="showSaveError" class="has-text-danger">
                    There was a problem saving your rsvp. Please try again. If the problem persists, please call Chris or Malka to rsvp.
                  </div>
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
import { forEach } from 'lodash';
import Vue from 'vue';
import LambdaAPI from '../api/LambdaAPI';

interface Data {
  showStage1: boolean;
  guestName: string;
  parsedName: string;
  showGroupLoader: boolean;
  showFormatError: boolean;
  showNameNotFound: boolean;
  showWrongSection: boolean;
  alternateLink: string;
  showDecline: boolean;
  showAccept: boolean;
  showStage2: boolean;
  group: any;
  showEmptyNamesError: boolean;
  showSaveError: boolean;
  showSaveLoader: boolean;
  showSaveSuccessMessage: boolean;
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
      parsedName: '',
      showGroupLoader: false,
      showFormatError: false,
      showNameNotFound: false,
      showWrongSection: false,
      alternateLink: '',
      showStage2: false,
      showDecline: false,
      showAccept: false,
      group: null,
      showEmptyNamesError: false,
      showSaveError: false,
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
          const group = await LambdaAPI.getGroupById(newId);
          if (group.Attendees.length === 0) {
            group.Attendees.push({
              Id: 1,
              Name: this.parsedName,
              Brunch: false,
              Hotel: false,
              Shuttle: false,
              DietaryRestrictions: ''
            });
          }
          this.showStage1 = false;
          this.showStage2 = true;
          this.group = group;
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
        this.parsedName = `${firstName} ${lastName}`;
        // console.log(firstName);
        // console.log(lastName);

        const group = await LambdaAPI.getGroupByGuestName(this.parsedName);

        // const group = {
        //   Id: 1,
        //   GuestType: 'Family',
        //   GroupId: 1,
        //   Addressees: ['Pete Seeling', 'Tina Seeling'],
        //   Attendees: [
        //     {
        //       Name: 'Pete Seeling',
        //       Brunch: false,
        //       Hotel: false,
        //       Shuttle: false,
        //       DietaryRestrictions: ''
        //     },
        //     {
        //       Name: 'Tina Seeling',
        //       Brunch: false,
        //       Hotel: false,
        //       Shuttle: false,
        //       DietaryRestrictions: ''
        //     }
        //   ] as Reservation[],
        //   DietaryNeeds: ''
        // };

        // console.log(group);
        if (group && group.Addressees.length > 0) {
          if (group.Attendees.length === 0) {
            group.Attendees.push({
              Id: 1,
              Name: this.parsedName,
              Brunch: false,
              Hotel: false,
              Shuttle: false,
              DietaryRestrictions: ''
            });
          }

          if (group.GuestType.toLowerCase() !== this.section.toLowerCase()) {
            this.showWrongSection = true;
            this.alternateLink = `/${group.GuestType.toLowerCase()}/rsvp?gid=${group.Id}`;
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

      if (this.group.Attendees.length === 0) {
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
      this.showStage2 = false;
      this.showDecline = false;
      this.showAccept = false;
      this.alternateLink = '';
    },

    resetStage2Form() {
      this.showStage1 = true;
      this.showStage2 = false;
      this.group = null;
      this.showEmptyNamesError = false;
      this.showSaveError = false;
      this.showSaveSuccessMessage = false;
    },

    addGuestRow() {
      this.group.Attendees.push({
        Id: this.group.Attendees.length + 1,
        Name: '',
        Brunch: false,
        Hotel: false,
        Shuttle: false,
        DietaryRestrictions: ''
      });
    },

    removeGuestRow(index: number) {
      this.group.Attendees.splice(index, 1);
    },

    async saveGroup() {
      // console.log(this.group);
      this.showSaveLoader = true;

      let attendeesHaveNames = true;
      forEach(this.group.Attendees, (attendee) => {
        if(attendee.Name === '') {
          attendeesHaveNames = false;
        }
      });
      // console.log(attendeesHaveNames);

      if(attendeesHaveNames) {
        try {
          const response = await LambdaAPI.saveRsvps(this.group);
          this.showSaveSuccessMessage = true;
        } catch (err) {
          this.showSaveError = true;
          // console.log(err);
        }
      } else {
        this.showEmptyNamesError = true;
      }
      this.showSaveLoader = false;
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
