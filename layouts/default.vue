<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon />
      <v-flex xs2>
        <v-img src="/images/logo.jpg" height="50px" width="50px" />
      </v-flex>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          Home
        </v-btn>
        <v-btn flat>
          About Us
        </v-btn>
        <v-btn flat>
          Projects
        </v-btn>
        <v-btn flat>
          Contact Us
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">
            <h2>Contact Us</h2>
          </strong>
        </v-card-title>

        <v-layout row wrap>
          <v-container>
            <v-flex xs12>
              <responsive>
                <GmapMap
                  :center="{lat:16.355242, lng:80.836730}"
                  :zoom="7"
                  map-type-id="terrain"
                  style="width: 100%; height: 500px"
                >
                  <GmapMarker
                    ref="Lalitha Infrastructures"
                    :position="{lat:16.355242, lng:80.836730}"
                  />
                </GmapMap>
              </responsive>
            </v-flex>
          </v-container>
        </v-layout>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 —
          <strong>Lalitha Infrastructures</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAIeXIsUJSMAbthIZwbkL3_jFhkgiH_nUI',
    libraries: 'places'
  }
})
export default {
  data: function() {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  }
}
</script>
