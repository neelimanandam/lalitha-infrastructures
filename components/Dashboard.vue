<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-carousel height="100%">
          <v-carousel-item v-for="image in images" :key="image.uid">
            <v-img style="height:100%" :src="image.source">
              <v-layout
                row
                fill-height
                justify-start
                align-end
                class="title font-weight-light"
              >
                <v-flex xs-12>
                  <h1 style="padding:100px">
                    {{ image.text }}
                  </h1>
                </v-flex>
              </v-layout>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-spacer />
    <v-container>
      <v-card>
        <v-card-text>
          <h1 class="text-xs-center">
            About Us
          </h1>
          <br>
          <br>
          <p>N.S.Towers, a sign of tranquility as it has all kinds of peacefulness and has rich green surroundings.It has striking architecture, elegant design complementing benifits and above all, a rich lifestyle. The NS Towers is nourished by ample greenery and modern-day conveniences.It truely elevated its image beyond the height of glory and pride. N.S.Towers is ideally located in the midst of a serene environment, free from all kinds of all pollution, ensuring hygiene atmosphere for healthy and happy living.</p>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-card-text>
        <h1 class="text-xs-center">
          Our Projects
        </h1>
      </v-card-text>

      <v-card>
        <v-layout row wrap>
          <v-flex md6 xs12>
            <v-card-media src="/images/nstowers.jpg" />
          </v-flex>

          <v-flex md6 xs12>
            <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
              <v-layout row wrap>
                <v-flex v-for="n in 9" :key="n" xs4 />
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <v-card-text>
          <h1 class="text-xs-center">
            Our Team
          </h1>
          <br>
          <br>
          <p>The founders of the company have a decade of specialized experience in development and construction of residential flats across Andhra Pradesh and Hyderabad. The company has grown from strength to strength, having successfully completed 20 prestigious projects of open residential land and residential apartments within Hyderabad and Andhra Pradesh.</p>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      images: [
        {
          source: '/images/image0.jpg',
          uid: 0,
          text: 'Enjoy the Heights of Luxury'
        },
        {
          source: '/images/image1.jpg',
          uid: 1,
          text: 'A Unique Modern Concept'
        },
        {
          source: '/images/image2.jpg',
          uid: 2,
          text: 'Elevates the Pride of Life'
        },
        {
          source: '/images/image3.jpg',
          uid: 3,
          text: '2 & 3 BHK Luxury Apartments @Vuyyuru'
        }
      ]
    }
  }
}
</script>
