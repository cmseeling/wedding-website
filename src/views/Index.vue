<template>
  <v-container fill-height grid-list-md text-center class="index-page">
    <v-layout row wrap align-center>
      <v-flex sm5/>
      <v-flex>
        <v-btn to="/family">Family</v-btn>
      </v-flex>
      <v-flex>
        <v-btn to="/friends">Friends</v-btn>
      </v-flex>
      <v-flex sm5/>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .index-page {
    background: rgb(173,216,230);
    background: linear-gradient(270deg, rgba(128,0,0,1) 65%, rgba(173,216,230,1) 100%);
  }
</style>

