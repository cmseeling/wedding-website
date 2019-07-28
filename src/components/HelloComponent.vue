<template>
  <div>
    <span>{{count}}</span>
    <button @click="onClick">Click me</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloComponent',
  data: () => {
    return {
      count: 0
    };
  },
  methods: {
    onClick() {
      this.count++;
    }
  }
});
</script>
