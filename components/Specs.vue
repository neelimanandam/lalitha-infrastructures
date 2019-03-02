<template>
  <v-container fluid>
    <v-card-text>
      <h1 class="text-xs-center">
        Specifications & Amenities
      </h1>
    </v-card-text>

    <plan />
    
    <v-card color="#FAFAFA" flat>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#FAFAFA" flat>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex
                  v-for="n in tabledata"
                  :key="n.id"
                  xs12
                  md4
                  sm5
                  xl3
                >
                  <v-card-text>
                    <h3>{{ n.heading }}</h3>
                    <v-spacer />
                    {{ n.message1 }}
                    <v-spacer />
                    <h3>{{ n.subheading }}</h3>
                    <v-spacer />
                    {{ n.message2 }}
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>
<script>
import Plan from '~/components/Plan'
export default {
  name: 'Specs',
  components: {
    Plan
  },
  data: function() {
    return {
      tabledata: [
        {
          heading: ' STRUCTURE:',
          message1:
            ' RCC framed structure with "Ultratech Cement" and "Simhadri TMT Steel.',
          subheading: 'SUPERSTRUCTURE:',
          message2:
            'Red clay bricks with outside 9 inches walls andonside 4.5 inches walls.',
          id: 1
        },
        {
          heading: 'KITCHEN:',
          message1:
            'Granate cooking platform with SS sink and Ceramic tiles upto 2 inches height.',
          subheading: 'CUPBOARDS:',
          message2: 'High quality MDF Laminated Cupboards.',
          id: 2
        },
        {
          heading: ' MAIN DOORS:',
          message1:
            ' Designed teak wood frames and teak wood panel shutter with polish using brass/SS Fixtures.',
          subheading: 'INTERNAL DOORS:',
          message2: 'Teak wood frames with good quality moulded shutters.',
          id: 3
        },
        {
          heading: 'TOILETS:',
          message1:
            '7 inches Ceramic tiles for walls and non-skid Ceramic tiles on floor.',
          subheading: 'SANITARY:',
          message2: 'PVC sanitary lines of Astral/Finolex make.',
          id: 4
        },
        {
          heading: ' LIFTS:',
          message1: ' 6 Passengers lift of standard make will be provided.',
          subheading: 'GENERATOR:',
          message2:
            'Generator will be provided to Lift, Motor, Common lighting etc. ',
          id: 5
        },
        {
          heading: 'WINDOWS:',
          message1: 'Sliding UPVC windows with designed MS grills.',
          subheading: 'FINISHING:',
          message2:
            'Plastering with cement mortor in double coat sponge and Altek finish.',
          id: 6
        },
        {
          heading: ' ELECTRICAL:',
          message1:
            '3 Phase power with concealed PVC pipes Finolex/Polycab copper wiring, Legrand(Mylinv) modular switches with provision ofAC, Telephone, TV, Fridge, Geyser,Tube lights, Ceiling fan points.',
          id: 7
        },
        {
          heading: 'WATER SUPPLY:',
          message1:
            'Bore well water with submersible moter and RCC overhead tank.',
          subheading: 'PARKING:',
          message2: 'One car parking for each flat.',
          id: 8
        },
        {
          heading: ' PAINTING:',
          message1:
            '2 coats interior emulsion over wall care putty for interior walls, enamel paint for wood work, 2 coats of exterior emulsion for exterior surface(Asian/Berger).',
          id: 9
        },
        {
          heading: 'FLOORING:',
          message1:
            '2x2 vetrified tiles flooring in Hall, Bed room, Dining Hall & Kitchen.',
          subheading: 'PLUMBING:',
          message2:
            'CPVC water lines of Astral/Finolex make and jaguar brand mixer sets and Tap fittings.',
          id: 10
        },
        {
          heading: 'OWNERS COST:',
          message1:
            'Registration charges, GST and other taxes levied by Govt. will be at actuals.',
          id: 11
        }
      ]
    }
  }
}
</script>
