<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-responsive>
          <v-carousel height="100%">
            <v-carousel-item key="0">
              <v-img style="height:100%" src="/images/image4.jpg" />
            </v-carousel-item>

            <v-carousel-item key="1">
              <v-img src="/images/image0.jpg" />
            </v-carousel-item>
            <v-carousel-item key="2">
              <v-img src="/images/image1.jpg" />
            </v-carousel-item>
            <v-carousel-item key="3">
              <v-img src="/images/image2.jpg" />
            </v-carousel-item>
            <v-carousel-item key="4">
              <v-img src="/images/image3.jpg" />
            </v-carousel-item>
          </v-carousel>
        </v-responsive>
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
            <v-data-table :headers="headers" :items="desserts" class="elevation-1">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">
                  1
                </td>
                <td class="text-xs-right">
                  2
                </td>
                <td class="text-xs-right">
                  3
                </td>
                <td class="text-xs-right">
                  4
                </td>
                <td class="text-xs-right">
                  5
                </td>
              </template>
            </v-data-table>
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
    return {}
  }
}
</script>
