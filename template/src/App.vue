<template lang="pug">
  div#app
    router-view
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="sass" src="styles/application.sass"></style>
<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
</style>
