<template>
  <v-layout>
    <v-flex xs12 md6 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">BROADCAST</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <v-flex>
            <v-text-field label="Username"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field type="password" label="Password"></v-text-field>
          </v-flex>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="info" fab>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>
