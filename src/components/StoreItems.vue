<template>
  <div>
    <h1>Store</h1>
    <ul>
      <li
        v-for="item in items"
        :key="item.name"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['items'])
  }
}
</script>
