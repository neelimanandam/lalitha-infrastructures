<template>
  <div>
    <v-carousel>
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
    <v-spacer />
    <v-container>
      <v-card>
        <v-card-text>
          <h1 class="text-xs-center">
            About Us
          </h1>
          <br>
          <br>
          <p>The founders of the company have a decade of specialized experience in development and construction of residential flats across Andhra Pradesh and Hyderabad. The company has grown from strength to strength, having successfully completed 20 prestigious projects of open residential land and residential apartments within Hyderabad and Andhra Pradesh.</p>
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
        <v-layout row="2">
          <v-flex xs6>
            <v-card-media src="/images/nstowers.jpg" />
          </v-flex>

          <v-flex xs6>
            <v-card-text>
              <h3>The founders of the company have a decade of specialized experience in development and construction of residential flats across Andhra Pradesh and Hyderabad. The company has grown from strength to strength, having successfully completed 20 prestigious projects of open residential land and residential apartments within Hyderabad and Andhra Pradesh.</h3>
            </v-card-text>
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
    <v-container>
      <v-card-text>
        <h1 class="text-xs-center">
          Contact Us
        </h1>
      </v-card-text>

      <v-card color="primary">
        <v-layout row="2">
          <v-flex xs6>
            <v-card-text class="text-xs-center">
              <v-icon>room</v-icon>
              Srivijaya lakshmi vastralayam,<br>
              Main Road<br>
              Vuyyuru<br>
              <v-icon>phone</v-icon>
              7799416832.
            </v-card-text>
          </v-flex>

          <v-flex xs6>
            <v-card-text>
              <h3>The founders of the company have a decade of specialized experience in development and construction of residential flats across Andhra Pradesh and Hyderabad. The company has grown from strength to strength, having successfully completed 20 prestigious projects of open residential land and residential apartments within Hyderabad and Andhra Pradesh.</h3>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    
    <v-footer>
      <v-card>
        <v-card-title class="tead">
          Get connected with us social networks!
          <v-spacer />
          <v-icon size="24px">
            facebook
          </v-icon>
        </v-card-title>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  data: function() {
    return {}
  }
}
</script>
