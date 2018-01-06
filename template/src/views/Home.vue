<template lang="pug">
  div.home
    img(src="~assets/logo.svg")
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Home',
    methods: {
      ...mapActions({
        fetchUsers: 'users/fetch',
      }),
    },
    mounted() {
      this.fetchUsers()
    },
  }
</script>

<style lang="sass" src="./Home.sass" scoped></style>
