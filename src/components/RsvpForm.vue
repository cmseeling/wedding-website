<template>
  <div class="container">
    <div class="stage1-name">
      <div class="columns is-vcentered full-height">
        <div class="column"></div>
        <div class="column">
          <div class="field">
            <label class="label" for="stage1Name">Your name as it appears on the invitation:</label>
            <input class="input" id="stage1Name" type="text" v-model="guestName" @keyup.enter="onNameSubmit"/>
          </div>
        </div>
        <div class="column">
          <button class="button is-link" id="stage1ContinueButton" @click="onNameSubmit">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LambdaAPI from '../api/LambdaAPI';

export default Vue.extend({
  name: 'RsvpForm',
  props: {
    section: String
  },
  data: () => {
    return {
      guestName: ''
    };
  },
  methods: {
    async onNameSubmit() {
      console.log(this.guestName);
      const firstName = this.guestName.slice(0, this.guestName.lastIndexOf(' '));
      const lastName = this.guestName.slice(this.guestName.lastIndexOf(' ') + 1, this.guestName.length);
      console.log(firstName);
      console.log(lastName);

      await LambdaAPI.getGroup(firstName, lastName);
    }
  }
});
</script>


<style scoped>
  .full-height {
    height: 100vh;
  }

  #stage1ContinueButton {
    margin-top: 2rem;
  }
</style>
