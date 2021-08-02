<template>
  <Layout>
    <v-container text-center>
      <v-layout column>
        <v-flex>
          <!-- <h1 style="background-color: orange">Due to Covid-19, we have decided to push our reception back to August 2021. Stay safe everyone!</h1> -->
          <h1 :class="headerClass">
            Welcome! Our wedding reception with our
            {{ $route.params.guestType }} will be {{ date }}.
          </h1>
        </v-flex>
        <v-flex ma-5 text-left class="info-text">
          <h2>COVID-19 Information</h2>
          <v-card>
            <v-card-title></v-card-title>
            <v-card-text class="subtitle-1">
              <p>
                The CDC is now recommending that both vaccinated and
                unvaccinated people wear masks indoors, so we are recommending
                that people wear masks while in the park pavilion, except when
                eating. We will have some disposable masks available, but
                suggest you bring your own.
              </p>
              <p>
                If you are experiencing COVID symptoms or have been in contact
                with someone who has tested positive, please let us know and
                stay home. We will be sorry to miss you but want to make sure we
                are taking all precautions with the delta variant and increased
                case counts.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-if="$vuetify.breakpoint.mdAndUp" mt-3>
          <v-img
            src="/images/city_museum_cropped.jpg"
            aspect-ratio="3"
            contain
          />
        </v-flex>
        <v-flex v-else mt-5>
          <v-img
            src="/images/city_museum_cropped.jpg"
            aspect-ratio="2"
            contain
          />
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Layout,
  },
  computed: {
    date() {
      if (this.$route.params.guestType.toLowerCase() === "family") {
        return "August 7, 2021";
      } else {
        return "August 14, 2021";
      }
    },
    headerClass() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "desktop";
      } else {
        return "mobile";
      }
    },
  },
});
</script>

<style scoped>
img {
  image-orientation: from-image;
}

.desktop {
  font-family: "Courgette", cursive;
  font-size: 3rem;
}

.mobile {
  font-family: "Courgette", cursive;
  font-size: 2rem;
}
</style>
