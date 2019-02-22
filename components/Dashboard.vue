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
          Specifications & Amenities
        </h1>
      </v-card-text>

      <v-card>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                <v-layout row wrap>
                  <v-flex v-for="n in tabledata" :key="n.id" xs4>
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
      <v-card>
        <v-card-text>
          <h1 class="text-xs-center">
            Contact Us
          </h1>
          <br>
          <br>
          <v-flex xs12>
            <GmapMap
              :center="{lat:16.355242, lng:80.836730}"
              :zoom="7"
              map-type-id="terrain"
              style="width: 100%; height: 350px"
            >
              <GmapMarker
                ref="Lalitha Infrastructures"
                :position="{lat:16.355242, lng:80.836730}"
              />
            </GmapMap>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
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
      ],
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
