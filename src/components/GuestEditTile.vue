<template>
  <v-card>
    <v-card-title>{{value.FirstName}} {{value.LastName}}</v-card-title>
    <v-card-text>
      <v-container text-left>
        <v-layout column>
          <v-flex>
            <div>Will this person be attending?</div>
            <v-radio-group v-model="value.Attending" row>
              <v-radio label="Yes" :value="true" off-icon="far fa-circle" on-icon="fa fa-dot-circle"/>
              <v-radio label="No" :value="false" off-icon="far fa-circle" on-icon="fa fa-dot-circle"/>
            </v-radio-group>
          </v-flex>
          <v-flex v-if="value.Attending === true">
            <v-divider/>
            <v-container>
              <v-layout column>
                <v-flex>
                  <label class="label" :for="`menuChoice${value.Id}`">Menu Option</label>
                  <v-select :id="`menuChoice${value.Id}`" solo v-model="value.MenuChoice" :items="menuChoices"/>
                </v-flex>
                <v-flex>
                  <label class="label">Dietary Restrictions</label>
                  <v-textarea v-model="value.DietaryNeeds" no-resize outlined rows="2"/>
                </v-flex>
                <v-divider/>
                <v-flex>
                  <div>Will you be joining us for brunch on Sunday morning?</div>
                  <v-radio-group v-model="value.Brunch" row>
                    <v-radio label="Yes" :value="true" off-icon="far fa-circle" on-icon="fa fa-dot-circle"/>
                    <v-radio label="No" :value="false" off-icon="far fa-circle" on-icon="fa fa-dot-circle"/>
                  </v-radio-group>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
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
  },
  data() {
    return {
      menuChoices: [
        { text: '', value: undefined },
        { text: 'Option 1', value: 1 },
        { text: 'Option 2', value: 2 },
        { text: 'Option 3', value: 3 }
      ]
    };
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

