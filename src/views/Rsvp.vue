<template>
  <Layout>
    <RsvpForm :section="$route.params.guestType"/>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import RsvpForm from '@/components/RsvpForm.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    RsvpForm,
    Layout
  }
});
</script>
