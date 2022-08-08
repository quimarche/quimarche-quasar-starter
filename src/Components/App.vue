<template>
  <div class="q-ma-md text-primary">Running Quasar v{{ $q.version }}</div>
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
