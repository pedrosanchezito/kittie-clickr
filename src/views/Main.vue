<template>
  <div class="grid">
    <div class="col-5 col-offset-1 main-page flex flex-column align-items-center justify-content-top">
      <h1>{{ kittenName }}</h1>

      <p>Purrs: {{ purrs }}</p>
      <p>Level: {{ level }}</p>
      <p>Time: {{ seconds }}</p>

      <img
        :src="kittenUrl"
        class="cat-circle"
        @click="incrementPurrs"
      />

      <Button
        @click="resetSeconds"
        label="Reset timer"
        class="p-button-outlined mt-5"
      />
    </div>

    <Divider layout="vertical" />

    <div class="col-5 flex flex-column align-items-center justify-content-top">
      <StoreItems />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import StoreItems from '@/components/StoreItems.vue'

export default {
  name: 'Main',
  components: {
    Button,
    Divider,
    StoreItems
  },
  data () {
    return {
      purrs: 0,
      totalSpent: 0,
      level: 0
    }
  },
  computed: {
    ...mapState(['kittenName', 'kittenUrl', 'timer', 'seconds'])
  },
  methods: {
    ...mapActions(['createTimer', 'clearTimer']),
    ...mapMutations(['setSeconds']),
    incrementPurrs () {
      this.purrs += 1
    },
    resetSeconds () {
      this.setSeconds(0)
    }
  },
  mounted () {
    this.createTimer()
  },
  unmounted () {
    this.clearTimer()
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
