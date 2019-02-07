<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap justify-center>
      <div class="loginContainer">
        <p>HELLO</p>
      </div>
    </v-layout>
  </v-container>
</template>
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>

<script>
export default {
  components: {}
}
</script>

<style>
.loginContainer {
  height: 350px;
}
</style>
