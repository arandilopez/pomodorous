<template>
  <div id="#app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  import Navbar from './components/Navbar'

  export default {
    store,
    components: { Navbar }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');
$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome.scss";

$family-serif: "Lato", serif; // Add a serif family
$family-primary: $family-serif; // Use the new serif family
$blue: #72d0eb;// Update blue
$pink: #ffb3b3; // Add pink

@import "~bulma";

.nav, .titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;

  a, button {
    -webkit-app-region: no-drag;
  }
}

</style>
