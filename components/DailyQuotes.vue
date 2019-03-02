<template>
  <v-flex>
    <v-card color="#FAFAFA" flat>
      <v-card-text>
        <p class="text-xs-center title">
          Quote of the Day
        </p>
        <span class="subheading font-italic">
          {{ quote }}
        </span>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { getQuote } from '~/api/dailyquotes'

export default {
  name: 'DailyQuotes',
  data: function() {
    return {
      quote: null
    }
  },
  mounted: function() {
    this.click()
  },
  methods: {
    click: function() {
      getQuote().then(response => {
        // eslint-disable-next-line
        this.quote = response.data.contents.quotes[0].quote
      })
    }
  }
}
</script>
