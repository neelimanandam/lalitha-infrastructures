
<template>
  <v-content align-center justify-center>
    <v-container fill-height>
      <v-layout>
        <v-flex xs6 offset-xs3>
          <v-card>
            <v-card-title primary-title :style="headerStyle">
              <div>
                <h3 class="headline mb-0">
                  <v-icon large>
                    location_city
                  </v-icon>
                  {{ appName }}
                </h3>
              </div>
            </v-card-title>
            <v-card-text>
              <form>
                <v-text-field
                  v-model="username"
                  label="Username"
                  prepend-inner-icon="person"
                  required
                />
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  prepend-inner-icon="lock"
                  required
                />
              </form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" to="/dashboard">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>


<script>
export default {
  components: {},
  data: function() {
    return {
      username: '',
      password: '',
      appName: 'Lalitha Infrastructures'
    }
  },
  computed: {
    headerStyle() {
      return {
        'background-color': this.$vuetify.theme.primary,
        color: '#FFF'
      }
    }
  }
}
</script>

<style>
.loginContainer {
  height: 350px;
}
</style>
