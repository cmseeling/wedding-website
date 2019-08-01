<template>
  <Layout section="friends">
    <RsvpForm section="friends"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import RsvpForm from '@/components/RsvpForm.vue';

export default Vue.extend({
  components: {
    RsvpForm
  }
});
</script>

