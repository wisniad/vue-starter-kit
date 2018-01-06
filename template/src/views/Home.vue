<template lang="pug">
  div.home
    img(src="~assets/logo.svg")
    h1.c-white Hello from your awesome Vue.js project!
</template>

<script>
  import R from 'ramda'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapGetters({
        users: 'users/users',
      }),
      usersNames() {
        return R.pluck('name')(this.users)
      },
    },
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
