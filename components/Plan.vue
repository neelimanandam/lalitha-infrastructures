<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md6 xs12 sm12 xl6>
        <v-card max-height="430px" color="#FAFAFA" flat>
          <v-card-title>
            <span class="title">
              Typical Plan
            </span>
          </v-card-title>
          <v-card-text>
            <v-img src="/images/plan.jpg" style="max-width:500px;height:auto;" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 xl6 sm12>
        <v-card max-height="430px" color="#FAFAFA" flat>
          <v-card-title />
          <v-card-text>
            <v-list>
              <v-list-tile v-for="msg in messages" :key="msg">
                <v-list-tile-avatar>
                  <v-icon>done</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <span class="subheading">
                    {{ msg }}
                  </span>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <br><br><br>
    <br><br><br>
    <v-divider />

    <v-layout row wrap>
      <v-flex md6 xs12 sm12 xl6>
        <v-card max-height="500px" color="#FAFAFA" flat>
          <v-card-title>
            <span class="title">
              Parking Plan
            </span>
          </v-card-title>
          <v-card-text>
            <v-img src="/images/parkingPlan.png" style="max-width:500px;height:auto;" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 xl6 sm12>
        <v-card max-height="500px" color="#FAFAFA" flat>
          <v-card-title>
            <span class="title">
              Area Statement
            </span>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="flatTypes"
              class="elevation-1"
              hide-actions
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.type }}</td>
                <td>{{ props.item.facing }}</td>
                <td>{{ props.item.sft }}</td>
              </template>
            </v-data-table>
          </v-card-text>
          <br>
          <p class="title">
            Do you know this?
          </p>
          <v-slider
            v-model="randomNumber"
            color="orange"
            label="Select a random number"
            hint="Slide to know more!"
            min="0"
            :max="max"
            thumb-label
          />
          <br>
          <span v-if="randomNews" class="subheading">
            {{ randomNews }}
          </span>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getNews } from '~/api/randomNews'
export default {
  data: function() {
    return {
      randomNumber: 0,
      randomNews: null,
      max: 0,
      messages: [
        'Strategic Location',
        'Premium Quality Construction',
        'As per CRDA Norms',
        'All Flats as per Vaasthu',
        'Pollution Free Environment',
        'Excellent Ventilation for Healthy Life',
        'Water Supply through Bore-well',
        'Power back-up Generator'
      ],
      headers: [
        { text: 'Type', value: 'type', sortable: false },
        { text: 'Facing', value: 'facing', sortable: false },
        { text: 'Area(Sft)', value: 'sft', sortable: false }
      ],
      flatTypes: [
        {
          type: '2 BHK',
          facing: 'WEST',
          sft: 1145
        },
        {
          type: '3 BHK',
          facing: 'EAST',
          sft: 1290
        }
      ]
    }
  },
  watch: {
    randomNumber: function() {
      this.getRandomNews()
    }
  },
  mounted: function() {
    this.getRandomNews()
  },
  methods: {
    getRandomNews: function() {
      const vm = this
      getNews().then(response => {
        if (
          response.data &&
          response.data.articles &&
          response.data.articles.length > 0
        ) {
          vm.max = response.data.articles.length - 1
          vm.randomNews = response.data.articles[vm.randomNumber].title
        }
      })
    }
  }
}
</script>
