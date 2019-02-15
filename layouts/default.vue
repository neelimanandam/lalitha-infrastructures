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
      <nuxt />
    </v-content>
  </v-app>
</template>
