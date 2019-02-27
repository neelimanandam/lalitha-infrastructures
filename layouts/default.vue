<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" :to="item.link">
            <v-list-tile-content class="text-uppercase">
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`" />
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-flex xs3 md1 sm2 xl1>
        <v-img src="/icon.png" height="50px" width="50px" @click="clickMethod" />
      </v-flex>
      <v-flex xs9 md6 sm7 xl3>
        <span class="subheading font-weight-medium text-uppercase">
          Lalitha Infrastructures
        </span>
      </v-flex>

      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/dashboard">
          Home
        </v-btn>
        <v-btn flat to="/about">
          About Us
        </v-btn>
        <v-btn flat to="/specs">
          Specs
        </v-btn>
        <v-btn flat to="/plan">
          Plan
        </v-btn>
        <v-btn flat to="/contact">
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
    key: 'AIzaSyCZtdWUqRMcZz9MH0JLPKv7auufuknqGKE',
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
        { title: 'Home', link: '/dashboard' },
        { title: 'About Us', link: '/about' },
        { title: 'Specs', link: '/specs' },
        { title: 'Plan', link: '/plan' },
        { title: 'Contact Us', link: '/contact' }
      ]
    }
  },
  methods: {
    clickMethod: function() {
      this.$router.push('/')
    }
  }
}
</script>
