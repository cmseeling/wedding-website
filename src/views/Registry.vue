<template>
  <Layout>
    <v-container text-center>
      <v-layout row>
        <v-flex/>
        <v-flex md6>
          <v-layout column class="info-text-container">
            <v-flex ma-5 text-left class="info-text">
              <h2>Gifts and Donations</h2>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text class="subtitle-1">
                  <p>
                    Your best wishes and support are present enough, but if you are looking for gift ideas we are registered at <a href="https://www.zola.com/registry/malkaandchris">Zola</a>.
                  </p>
                  <p>
                    We would also appreciate donations given in our name to the <a href="https://www.mncenter.org/support-us.html">Minnesota Center for Environmental Advocacy</a>.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex/>
      </v-layout>
    </v-container>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    Layout
  }
});
</script>

