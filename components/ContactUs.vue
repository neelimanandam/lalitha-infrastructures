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
                :center="{lat:16.355242, lng:80.836730}"
                :zoom="7"
                map-type-id="terrain"
                style="height:350px"
              >
                <GmapMarker
                  ref="Lalitha Infrastructures"
                  :position="{lat:16.355242, lng:80.836730}"
                />
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
                Sri Vijaya Lakshmi Vastralayam 
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
                <br>
                <span class="title">
                  Branch Office
                </span>
                <br>
                Vijaya Durga Electricals 
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
export default {
  name: 'ContactUs'
}
</script>
