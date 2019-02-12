<template>
  <v-content>
    <v-toolbar >
      <v-toolbar-side-icon>
        <v-icon>location_city</v-icon>
      </v-toolbar-side-icon>

      <v-toolbar-title>
        Lalitha Infrastructures
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn depressed small color="transperent">
          Home
        </v-btn>
        <v-btn depressed small>
          About Us
        </v-btn>
        <v-btn depressed small>
          Projects
        </v-btn>
        <v-btn depressed small>
          Flat Availability
        </v-btn>
        <v-btn depressed small>
          Gallary
        </v-btn>
        <v-btn depressed small>
          Contact us
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card>
      <v-card-media :src="image">
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      Unlimited music now
                    </div>
                    <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat >
                    Listen now
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          

            <v-flex xs12>
              <v-card color="cyan darken-2" class="white--text">
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                      height="125px"
                      contain
                    />
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">
                          Supermodel
                        </div>
                        <div>Foster the People</div>
                        <div>(2014)</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light />
                <v-card-actions class="pa-3">
                  Rate this album
                  <v-spacer />
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="purple" class="white--text">
                <v-layout row>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">
                          Halycon Days
                        </div>
                        <div>Ellie Goulding</div>
                        <div>(2013)</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex xs5>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                      height="125px"
                      contain
                    />
                  </v-flex>
                </v-layout>
                <v-divider light />
                <v-card-actions class="pa-3">
                  Rate this album
                  <v-spacer />
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
    </v-card>
  </v-content>
</template>



<script>
export default {
  data() {
    return {
      image: require('@/assets/images/building-construction-ts-500.jpg')
    }
  }
}
</script>
