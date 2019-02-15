<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-side-icon />
        <v-toolbar-title>Lalitha Infrastructures</v-toolbar-title>
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
      <v-footer>
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
                  <v-icon>room</v-icon>Srivijaya lakshmi vastralayam,
                  <br>Main Road
                  <br>Vuyyuru
                  <br>
                  <v-icon>phone</v-icon>7799416832.
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
      </v-footer>
      <nuxt />
    </v-content>
  </v-app>
</template>
