<template lang="pug">
  div.home
    img(src="~assets/logo.svg")
    HelloWorld
</template>

<script>
  import HelloWorld from 'components/HelloWorld'

  export default {
    name: 'Home',
    components: {
      HelloWorld,
    },
  }
</script>

<style lang="sass" src="./Home.sass" scoped></style>
