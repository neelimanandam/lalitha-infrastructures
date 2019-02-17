<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-side-icon/>
        <v-toolbar-title>Lalitha Infrastructures</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Home</v-btn>
          <v-btn flat>About Us</v-btn>
          <v-btn flat>Projects</v-btn>
          <v-btn flat>Contact Us</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <nuxt/>
      <v-footer>
        <v-container>
          <v-card>
            <v-card-text>
              <h1 class="text-xs-center">Contact Us</h1>
            </v-card-text>
          </v-card>

          <v-card color="primary">
            <v-layout row="2">
              <v-flex xs6>
                <v-card-text class="text-xs-center">
                  <v-icon>room</v-icon>Srivijaya lakshmi vastralayam,
                  <br>Main Road
                  <br>Vuyyuru
                  <br>
                  <v-icon>phone</v-icon>7799416832.
                </v-card-text>
              </v-flex>

              <v-flex xs6>
                <GmapMap
                  :center="{lat:16.355242, lng:80.836730}"
                  :zoom="7"
                  map-type-id="terrain"
                  style="width: 500px; height: 300px"
                >
                  <GmapMarker
                    ref="Lalitha Infrastructures"
                    :position="google && new google.maps.LatLng(16.355242, 80.836730)"
                 />
                </GmapMap>
              </v-flex>
            </v-layout>
          </v-card>
        </v-container>
      </v-footer>
    </v-content>
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
export default {}
</script>
