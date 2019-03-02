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
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
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
  }
}
</script>
