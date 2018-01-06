<template lang="pug">
  svg.icon(:class="{ 'icon--pointer': isPointer }", @click="onClick")
    use(:xlink:href="href", :href="href")
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      name: {
        type: String,
        required: true,
      },
      isPointer: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      href() {
        return `#${this.name}`
      },
    },
    methods: {
      onClick() {
        this.$emit('click')
      },
    },
  }
</script>

<style src="./Icon.sass" lang="sass" scoped></style>
