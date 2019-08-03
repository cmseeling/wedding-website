<template>
  <RsvpForm :section="$route.params.guestType"/>
</template>

<script lang="ts">
import RsvpForm from '@/components/RsvpForm.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    RsvpForm
  }
});
</script>
