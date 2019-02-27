<template>
  <div>
    <dashboard />
    <about-us />
    <v-divider />
    <v-divider />
    <specs />
    <v-divider />

    <contact-us />
  </div>
</template>

<script>
import Dashboard from '~/components/Dashboard'
import AboutUs from '~/components/AboutUs'
import Specs from '~/components/Specs'

import ContactUs from '~/components/ContactUs'

export default {
  components: {
    Dashboard,
    AboutUs,
    Specs,

    ContactUs
  },
  layout: 'default'
}
</script>
