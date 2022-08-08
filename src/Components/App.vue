<template lang="pug">
div.q-ma-md.text-primary Running Quasar v{{ $q.version }}
</template>

<script>
export default {
  mounted() {
    console.log('App mounted')
  }
}
</script>

<style lang="sass">
body
  background: WhiteSmoke
</style>
