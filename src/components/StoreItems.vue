<template>
  <div>
    <h1>Store</h1>
    <ul>
      <li
        v-for="item in items"
        :key="item.name"
        @click="() => checkPurchase(item)"
        :class="{disabled: currentTotal < item.cost}"
      >
        {{ item.name }} - {{ item.cost }} purrs (owned: {{ purchasedItemCount(item) }})
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  props: {
    currentTotal: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(['items']),
    ...mapGetters(['purchasedItemCount'])
  },
  methods: {
    ...mapMutations(['purchaseItem']),
    checkPurchase (item) {
      if (this.currentTotal > item.cost) {
        this.purchaseItem(item)
      }
    }
  }
}
</script>

<style scoped lang="sass">
ul
  list-style: none
  padding: 0
  li
    border: 1px solid #5f5f5f
    padding: 5px 5px
    margin-bottom: 5px
    width: 300px
  .disabled
    color: #5f5f5f
    background-color: #bfbfbf80
</style>
