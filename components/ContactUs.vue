<template>
  <div>
    <v-container fluid>
      <v-card flat>
        <v-card-text>
          <h1 class="text-xs-center">
            Contact Us
          </h1>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md6 xs12 sm12 xl6>
          <v-card>
            <v-card-text>
              <GmapMap
                :center="{lat:16.368970, lng:80.844170}"
                :zoom="15"
                map-type-id="terrain"
                style="height:350px"
              >
                <GmapMarker
                  ref="Vijaya Lakshmi Vastralayam"
                  :position="{lat:16.364368, lng:80.842876}"
                  :clickable="true"
                  @click="openMap"
                >
                  <gmap-info-window>
                    <info-content>
                      Lalitha Infrastructures,
                      <br>
                      c/o Sri Vijaya Lakshmi Vastralayam,
                      <br>
                      Main Road,
                      <br>
                      Vuyyuru
                    </info-content>
                  </gmap-info-window>
                </GmapMarker>
                <GmapMarker
                  ref="Vijaya Durga Electricals"
                  :position="{lat:16.368970, lng:80.844170}"
                  :clickable="true"
                  @click="openMap"
                >
                  <gmap-info-window>
                    <info-content>
                      Lalitha Infrastructures,
                      <br>
                      c/o Vijaya Durga Electricals,
                      <br>
                      Katur Road,
                      <br>
                      Vuyyuru
                    </info-content>
                  </gmap-info-window>
                </GmapMarker>
              </GmapMap>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          md6
          xl6
          sm12
        >
          <v-card height="382px">
            <v-card-text>
              <p class="text-xs-center">
                <br>
                <br>
                <span class="title">
                  Head Office
                </span>
                <br>
                Lalitha Infrastructures,
                <br>
                c/o Sri Vijaya Lakshmi Vastralayam 
                <br>
                Main road 
                <br>
                Vuyyuru
                <br>
                <v-icon>phone</v-icon>
                +91 7799416832
              </p>
              <v-divider />
              
              <p class="text-xs-center">
                <br>
                <span class="title">
                  Branch Office
                </span>
                <br>
                Lalitha Infrastructures,
                <br>
                c/o Vijaya Durga Electricals 
                <br>
                Katur road 
                <br>
                Vuyyuru
                <br>
                <v-icon>phone</v-icon>
                +91 9440663392
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
  name: 'ContactUs',
  methods: {
    openMap: function() {
      window.open(
        'https://www.google.com/maps?ll=16.369299,80.84417&z=15&t=p&hl=en-US&gl=US&mapclient=apiv3',
        '_blank'
      )
    }
  }
}
</script>
