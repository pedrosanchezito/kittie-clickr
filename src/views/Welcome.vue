<template>
  <div class="welcome-page grid">
    <div class="col-6 col-offset-3">
      <h1 class="text-center">Welcome to Kittie Clicker!!!</h1>
      <div class="mt-5">
        <h2>Choose your kitten</h2>
        <img
          v-for="url in kittens"
          :key="url"
          :src="url"
          @click="selectKitten(url)"
          class="m-1"
          style="height: 300px; width: 300px"
        >
      </div>

      <div class="p-field mt-5">
          <label
            for="name"
            class="mr-3"
          >Kitten's name
          </label>
          <InputText
            :modelValue="kittenName"
            @input="(e) => updateKittenInfo({ field: 'kittenName', value: e.target.value })"
            id="name"
            type="username"
            aria-describedby="name-help"
          />
      </div>

      <Button
        @click="goPlay"
        label="Go Play"
        class="p-button-outlined w-full mt-5"
      />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Welcome',
  components: {
    Button,
    InputText
  },
  computed: {
    ...mapState(['kittenName', 'kittenUrl', 'kittens'])
  },
  methods: {
    ...mapMutations(['updateKittenInfo']),
    selectKitten (kittenUrl) {
      this.updateKittenInfo({ field: 'kittenUrl', value: kittenUrl })
    },
    goPlay () {
      if (!this.kittenUrl || !this.kittenName) {
        this.$toast.add({ severity: 'error', summary: 'Invalid', detail: 'Select a kitten and name it please', group: 'tr', life: 3000 })
        return
      }
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="sass">
  .p-inputtext
    width: 300px
</style>
