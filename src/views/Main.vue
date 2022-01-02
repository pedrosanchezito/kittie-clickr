<template>
  <div class="main-page flex flex-column align-items-center justify-content-center">
    <h1>{{ kittenName }}</h1>
    <p>Purrs: {{ purrs }}</p>
    <img
      :src="kittenUrl"
      class="cat-circle"
      @click="incrementPurrs"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Main',
  data () {
    return {
      purrs: 0
    }
  },
  computed: {
    ...mapState(['kittenName', 'kittenUrl'])
  },
  methods: {
    incrementPurrs () {
      this.purrs += 1
    }
  }
}
</script>

<style scoped lang="sass">
.cat-circle
  width: 300px
  height: 300px
  border-radius: 50%
  border: 2px solid black
  background-color: #efefef
</style>
