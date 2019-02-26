<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-carousel height="100%">
          <v-carousel-item v-for="image in images" :key="image.uid">
            <v-img style="height:100%" :src="image.source">
              <v-layout row fill-height justify-start align-end class="title font-weight-light">
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
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
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
