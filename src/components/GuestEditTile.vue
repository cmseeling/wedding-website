<template>
  <div>
    <div class="tile is-child attending">
      <div>Will this person be attending?</div>
      <div class="guest-name">{{value.FirstName}} {{value.LastName}}</div>
      <div class="field">
        <div class="control">
          <label class="radio">
            <input type="radio" :name="`attendanceFor${value.Id}`" :value="true" v-model="value.Attending"/>
            Yes
          </label>
          <label class="radio">
            <input type="radio" :name="`attendanceFor${value.Id}`" :value="false" v-model="value.Attending"/>
            No
          </label>
        </div>
      </div>
    </div>
    <hr/>
    <div class="tile is-parent is-vertical" v-if="value.Attending === true">
      <div class="tile is-parent">
        <div class="tile is-child menu-choice">
          <div class="field">
            <div class="control">
              <label class="label" for="menuChoice">Menu Option</label>
              <div class="select menu-select-container">
                <select v-model="value.MenuChoice" id="menuChoice">
                  <option value="undefined">Select...</option>
                  <option value="1">Choice 1</option>
                  <option value="2">Choice 2</option>
                  <option value="3">Vegetarian</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-child">
          <div class="field">
            <div class="control">
              <label class="label" for="dietaryRestrictions">Dietary Restrictions</label>
              <input type="text" class="input" id="dietaryRestrictions" maxlength="200" v-model="value.DietaryNeeds"/>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="tile is-child">
        <span>Will you be joining us for brunch on Sunday morning?</span>
        <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" :name="`brunchFor${value.Id}`" :value="true" v-model="value.Brunch"/>
                Yes
              </label>
              <label class="radio">
                <input type="radio" :name="`brunchFor${value.Id}`" :value="false" v-model="value.Brunch"/>
                No
              </label>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GuestEditTile',
  props: {
    value: Object
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    }
  }
});
</script>

<style scoped>
  .menu-select-container {
    width: 99%;
  }

  #menuChoice {
    width: 100%;
  }

  .guest-name {
    font-size: 1.25rem;
    font-weight: bolder;
  }
</style>

