<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`" />
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-flex xs3 md1 sm2 xl1>
        <v-img src="/images/logo.png" height="50px" width="50px" />
      </v-flex>
      <v-flex xs9 md6 sm7 xl3>
        <span class="subheading font-weight-medium text-uppercase">
          Lalitha Infrastructures
        </span>
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
                  style="width: 100%; height: 350px"
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
      ],
      drawer: false,
      items: [
        { title: 'Home' },
        { title: 'About Us' },
        { title: 'Projects' },
        { title: 'Contact Us' }
      ]
    }
  }
}
</script>
